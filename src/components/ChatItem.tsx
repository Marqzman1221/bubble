import { useMemo } from "react"

interface UserModel {
  first_name: string
  last_name: string
}

type ChatModel = {
  users: UserModel[]
  message: string
}

interface ChatItemProps {
  item: ChatModel
}

const ChatItem = ({ item }: ChatItemProps) => {
  const usersString = useMemo(() => {
    const { users } = item

    if (!users || users.length === 0) return ""

    if (users.length > 1) {
      const nameList = users.map((user) => user.first_name)

      return nameList.join(", ")
    }

    return users[0]?.first_name
  }, [item.users])

  const messageString = useMemo(() => {
    const { message } = item

    return message
  }, [item.message])

  return (
    <div className="b-chat-item">
      <div className="flex p-2 h-full items-center justify-center">
        <div className="flex rounded-full bg-rose-600 text-neutral-900 text-white text-2xl w-14 h-14 justify-center items-center">
          <span className="h-min">{usersString?.charAt(0)}</span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="font-bold text-lg">{usersString}</div>
        <p className="text-white/50 font-light text-sm">{messageString}</p>
      </div>
    </div>
  )
}

export default ChatItem
