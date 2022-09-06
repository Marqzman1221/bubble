import { useMemo } from "react"

interface UserModel {
  first_name: string
  last_name: string
}

interface ChatItemProps {
  users: UserModel[]
}

const ChatHeader = ({ users }: ChatItemProps) => {
  const usersString = useMemo(() => {
    if (!users || users.length === 0) return ""

    if (users.length > 1) {
      const nameList = users.map((user) => user.first_name)

      return nameList.join(", ")
    }

    return users[0]?.first_name
  }, [users])

  return (
    <div className="flex rounded-xl bg-neutral-800 px-4 py-2  items-center gap-x-4">
      <div className="flex h-fulljustify-center">
        <div className="flex rounded-full bg-rose-600 text-neutral-900 text-white text-2xl w-12 h-12 justify-center items-center">
          <span className="h-min">{usersString?.charAt(0)}</span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="font-bold text-lg">{usersString}</div>
      </div>
    </div>
  )
}

export default ChatHeader
