import ChatItem from './ChatItem'

const ChatsList = () => {
  const chats = [
    {
      users: [
        {
          name: 'Thomas Smith',
          image:
            'https://lh3.googleusercontent.com/a/AItbvmlO0LSt5NpqaRCTk603v6JQZxAeEwMy12krt2MQ=s96-c',
        },
      ],
      messages: [
        {
          text: 'kabdjlk  doDK LADHNKk dakd jb k3u xjkqbkbbd bkabdjlk  doDK LADHNKk dakd jb k3u  xjkqbkbbd bkabdjlk  doDK LADHNKk dakd jb k3u  xjkqbkbbd bkabdjlk  doDK LADHNKk dakd jb k3u  xjkqbkbbd bkabdjlk  doDK LADHNKk dakd jb k3u  xjkqbkbbd bkabdjlk  doDK LADHNKk dakd jb k3u  xjkqbkbbd b',
          createdAt: 'Mon',
        },
      ],
    },
    {
      users: [
        {
          name: 'Juliet Flam-Ross',
          image:
            'https://lh3.googleusercontent.com/a/AItbvmlO0LSt5NpqaRCTk603v6JQZxAeEwMy12krt2MQ=s96-c',
        },
      ],
      messages: [],
    },
  ]

  return (
    <div className="b-chats-list">
      {chats.map((item, index) => (
        <ChatItem item={item} key={`chat-item-${index}`} />
      ))}
    </div>
  )
}

export default ChatsList
