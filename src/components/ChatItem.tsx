import Image from 'next/image'
import { FC, MouseEventHandler, useMemo } from 'react'
import styles from '../styles/components/ChatItem.module.css'

interface UserModel {
  id: string
  name: string
  image: string
}

interface MessageModel {
  text: string
  createdAt: string
  author: UserModel | undefined
}

type ChatModel = {
  users: UserModel[]
  messages: MessageModel[]
}

interface ChatItemProps {
  item: ChatModel
  onClick: MouseEventHandler
}

const ChatItem: FC<ChatItemProps> = ({ item, onClick }) => {
  const isGroupChat = useMemo(() => {
    const { users } = item

    return users.length > 1
  }, [item])

  function getFirstName(name: string | undefined) {
    if (!name) return ''

    return name.split(' ')[0]
  }

  const usersString = useMemo(() => {
    const { users } = item

    if (users.length === 0) return ''

    if (isGroupChat) {
      const nameList = users.map((user) => getFirstName(user.name))

      return nameList.join(', ')
    }

    return getFirstName(users[0]?.name)
  }, [item, isGroupChat])

  const latestMessage: MessageModel | undefined = useMemo(() => {
    const { messages } = item

    if (messages.length === 0)
      return {
        author: undefined,
        text: '',
        createdAt: '',
      }

    return messages[0]
  }, [item])

  return (
    <div className={styles.b_chat_item} onClick={onClick}>
      <div className={styles.avatar}>
        <Image
          style={{ borderRadius: '50%' }}
          src={item?.users[0]?.image}
          alt={`Picture of ${item?.users[0]?.name}`}
          layout="fill"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>{usersString}</div>
          <div className={styles.timestamp}>{latestMessage?.createdAt}</div>
        </div>

        <p className={styles.subtitle}>{latestMessage?.text}</p>
      </div>
    </div>
  )
}

export default ChatItem
