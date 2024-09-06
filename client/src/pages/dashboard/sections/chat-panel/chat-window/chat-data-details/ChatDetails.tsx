import { ActionButtons } from "./action-buttons/ActionButtons";
import { TransitionContainer } from "../../../../../../components/transition/container/TransitionContainer";
import { AnimatePresence } from "framer-motion";
import { useWindowWidth } from "../../../../../../hooks/window/useWindowWidth";
import { ChatInfoHeader } from "./header/ChatDetailsHeader";
import { ChatData } from "./chat-data/ChatData";

export const ChatDetails = ({
  isOpened,
  closeChatDetails,
}: {
  isOpened: boolean;
  closeChatDetails: () => void;
}) => {
  const { windowWidth } = useWindowWidth();

  return (
    <AnimatePresence mode="wait">
      {isOpened && (
        <TransitionContainer
          initial={{ width: 0, x: "100%" }}
          animate={{ width: windowWidth < 576 ? "100%" : 350, x: "0%" }}
          exit={{ width: 0, x: "100%" }}
          transition={{ duration: 0.2 }}
          className={`${windowWidth < 1200 && "position-absolute end-0"}
        
            
            d-flex flex-column flex-shrink-0 h-100 bg-my-dark`}
        >
          <ChatInfoHeader handleBack={closeChatDetails} />
          <ActionButtons />
          <ChatData />
        </TransitionContainer>
      )}
    </AnimatePresence>
  );
};
