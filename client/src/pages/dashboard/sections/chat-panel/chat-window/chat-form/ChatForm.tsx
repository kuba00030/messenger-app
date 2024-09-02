import "./chat-form.css";
import { useCalculateInputLines } from "../../../../../../hooks/styles/dimensions/calculate/useCalculateInputLines";
import { useWindowWidth } from "../../../../../../hooks/window/useWindowWidth";
import { IconButton } from "../../../../../../components/ui/buttons/Buttons";
import { useChatInput } from "../../../../../../hooks/chat/useChatInput";
import { iconsClassBootsrap } from "../../../../../../components/ui/icons/icons";

export const ChatForm = () => {
  // TODO:
  // Reply to message
  const { isFocused, setIsFocused, newMessage, inputRef } = useChatInput();
  const { inputLines } = useCalculateInputLines(inputRef, newMessage);
  const { windowWidth } = useWindowWidth();
  return (
    <div className="d-flex flex-row py-4 gap-2 px-4">
      {/* action button within chat form */}
      <div
        className={`d-flex flex-row overflow-hidden mt-auto flex-shrink-0 tr-02 ${
          windowWidth < 992 &&
          (newMessage || isFocused
            ? "action-btns-container-opened"
            : "action-btns-container-closed")
        } `}
      >
        <IconButton
          buttonProps={{
            type: "button",
            className: `${iconsClassBootsrap.micFill} bg-transparent border-0 shadow-none chat-window-btn tr-02`,
          }}
        />
        <IconButton
          buttonProps={{
            type: "button",
            className: `${iconsClassBootsrap.addImg} bg-transparent border-0 shadow-none chat-window-btn tr-02`,
          }}
        />
      </div>
      {/* chat form (input) */}
      <p
        className={`my-auto shadow-none overflow-auto border-0 fw-semibold text-break rounded-${
          inputLines !== 1 ? "2" : "pill"
        } bg-my-dark px-4 py-2 chat-input fc-my-white flex-fill`}
        style={{
          outline: "none",
          maxHeight: "3lh",
          minWidth: "50px",
        }}
        contentEditable
        ref={inputRef}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      ></p>
      <IconButton
        buttonProps={{
          type: "button",
          className: `${iconsClassBootsrap.send} bg-transparent border-0 shadow-none bg-default chat-window-send-btn mt-auto rounded-1 tr-02`,
        }}
      />
    </div>
  );
};
