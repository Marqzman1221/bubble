import ChatItem from "./ChatItem"

const ChatsList = () => {
  const chats = [
    {
      users: [
        {
          first_name: "Thomas",
          last_name: "Smith",
        },
      ],
      message: "kabdjlk  doDK LADHNKk dakd jb k3u  xjkqbkbbd b",
    },
    {
      users: [
        {
          first_name: "Juliet",
          last_name: "Flam-Ross",
        },
      ],
      message: "kabdjlk  doDK LADHNKk dakd jb k3u  xjkqbkbbd b",
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
