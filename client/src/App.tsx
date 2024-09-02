import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "./router/Router";
import { UserContextProvider } from "./context/user/UserContext";
import "./styles/global.css";
import { NavbarContextProvider } from "./context/navbar/NavbarContext";
import { ChatRoomContextProvider } from "./context/chat/ChatRoomContext";
import { ModalContextProvider } from "./context/modal/ModalContext";
import { MobileChatWindowContextProvider } from "./context/chat/MobileChatWindowContext";
import { ChatRoomMsgsProvider } from "./context/chat/CurrentChatRoomMsgs";
import { ChatMembersContextProvider } from "./context/chat/ChatMembers";

function App() {
  return (
    <UserContextProvider>
      <NavbarContextProvider>
        <MobileChatWindowContextProvider>
          <ChatRoomContextProvider>
            <ChatRoomMsgsProvider>
              <ChatMembersContextProvider>
                <ModalContextProvider>
                  <Router />
                </ModalContextProvider>
              </ChatMembersContextProvider>
            </ChatRoomMsgsProvider>
          </ChatRoomContextProvider>
        </MobileChatWindowContextProvider>
      </NavbarContextProvider>
    </UserContextProvider>
  );
}

export default App;
