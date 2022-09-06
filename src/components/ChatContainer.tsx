import ChatHeader from "./ChatHeader"
import ChatMessage from "./ChatMessage"

const ChatContainer = () => {
  const messages = [
    {
      fromSelf: false,
      text: "Hello",
    },
    {
      fromSelf: true,
      text: "Hi!",
    },
    {
      fromSelf: true,
      text: "What's up?",
    },
    {
      fromSelf: false,
      text: "Hello",
    },
    {
      fromSelf: true,
      text: "Hi!",
    },
    {
      fromSelf: true,
      text: "What's up?",
    },
    {
      fromSelf: false,
      text: "Hello",
    },
    {
      fromSelf: true,
      text: "Hi!",
    },
    {
      fromSelf: true,
      text: "What's up?",
    },
    {
      fromSelf: false,
      text: "Hello",
    },
    {
      fromSelf: true,
      text: "Hi!",
    },
    {
      fromSelf: true,
      text: "What's up?",
    },
    {
      fromSelf: false,
      text: "Hello",
    },
    {
      fromSelf: true,
      text: "Hi!",
    },
    {
      fromSelf: true,
      text: "What's up?",
    },
  ]

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="relative">
        <div className="z-20 absolute w-full p-4 top-0 left-0 bg-gradient-to-b via-neutral-900/50 from-neutral-900">
          <ChatHeader
            users={[{ first_name: "Yuma", last_name: "Okomiyaki" }]}
          />
        </div>
      </div>

      <div className="b-chat-container">
        {messages.map((message, index) => (
          <ChatMessage
            text={message.text}
            fromSelf={message.fromSelf}
            key={`chat-message-${index}`}
          />
        ))}
      </div>

      <div className="p-4 pt-2 w-full">
        <input
          className="px-4 py-2 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 bg-neutral-900 border-white/30 border-2 placeholder:text-white/50 rounded-xl w-full"
          placeholder="Message"
        />
      </div>
    </div>
  )
}

export default ChatContainer
