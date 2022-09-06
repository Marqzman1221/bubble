import ChatsList from "./ChatsList"
import ProfileFooter from "./ProfileFooter"
import SidebarHeader from "./SidebarHeader"

const ChatSidebar = () => {
  return (
    <div className="b-chat-sidebar">
      <SidebarHeader />

      <ChatsList />

      <div className="p-4">
        <ProfileFooter />
      </div>
    </div>
  )
}

export default ChatSidebar
