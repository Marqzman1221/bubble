import { createProtectedRouter } from './protected-router'

export const chatsRouter = createProtectedRouter()
  .query('getFriends', {
    async resolve({ ctx }) {
      return await ctx.prisma.userRelationship.findMany({
        where: {
          ownerId: ctx.session.user.id,
          status: 1,
        },
        include: {
          subject: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      })
    },
  })
  .query('getPendingRequests', {
    async resolve({ ctx }) {
      return await ctx.prisma.friendRequest.findMany({
        where: {
          OR: [
            {
              senderId: ctx.session.user.id,
            },
            {
              receiverId: ctx.session.user.id,
            },
          ],
        },
        include: {
          sender: {
            select: {
              id: true,
              name: true,
              image: true
            }
          },
          receiver: {
            select: {
              id: true,
              name: true,
              image: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc',
        },
      })
    },
  })
