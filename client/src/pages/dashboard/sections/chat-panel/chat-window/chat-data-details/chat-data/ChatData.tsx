import { ChatInfo } from "./sections/chat-info/ChatInfo";
import { MediaFiles } from "./sections/media/files/MediaFiles";
import { MediaImages } from "./sections/media/images/MediaImages";

export const ChatData = () => {
  return (
    <div className="d-flex flex-fill flex-column my-overflow-x-hidden">
      <ChatInfo />
      <MediaImages />
      <MediaFiles />
    </div>
  );
};
