import { createProtectedRouter } from "./protected-router";

export const chatsRouter = createProtectedRouter()
  .query("getChats", {
    async resolve({ ctx }) {
      const unsortedChats = await ctx.prisma.chat.findMany({
        where: {
          users: {
            some: {
              id: ctx.session.user.id,
            }
          }
        },
        include: {
          messages: {
            select: {
              author: {
                select: {
                  id: true,
                  name: true,
                }
              },
              text: true,
              createdAt: true,
            },
            orderBy: {
              createdAt: 'desc',
            },
            take: 1
          }
        },
      })

      type Chat = typeof unsortedChats[0]

      function sortChats(a: Chat, b: Chat): number {
        if (b.messages.length <= 0 || !b.messages[0]) return 1
        if (a.messages.length <= 0 || !a.messages[0]) return -1

        const timeA = a.messages[0].createdAt.getTime()
        const timeB = b.messages[0].createdAt.getTime()

        return timeB - timeA
      }

      return unsortedChats.sort(sortChats)
    }
  })