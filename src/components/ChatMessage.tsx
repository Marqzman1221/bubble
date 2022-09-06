interface ChatMessageProps {
  text: string
  fromSelf: boolean
}

const ChatMessage = ({ text, fromSelf }: ChatMessageProps) => {
  return (
    <div className={`b-chat-row ${fromSelf ? "sent" : "recieved"}`}>
      <div className="b-chat-bubble">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ChatMessage
