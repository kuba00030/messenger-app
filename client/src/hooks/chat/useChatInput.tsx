import { useState, useEffect, useRef } from "react";

const useMessageState = () => {
  const [newMessage, setNewMessage] = useState<string>("");
  return { newMessage, setNewMessage };
};

const useFocusHandler = (initFocusState: boolean) => {
  const [isFocused, setIsFocused] = useState<boolean>(initFocusState);
  const inputRef = useRef<HTMLParagraphElement | null>(null);

  return { isFocused, setIsFocused, inputRef };
};

const useKeyUpHandler = (
  inputRef: React.RefObject<HTMLParagraphElement>,
  isFocused: boolean,
  newMessage: string,
  setNewMessage: (message: string) => void
) => {
  useEffect(() => {
    const input = inputRef.current;

    if (input) {
      const handleKeyUp = () => {
        setNewMessage(input.innerHTML);
      };

      if (isFocused) {
        input.addEventListener("keyup", handleKeyUp);
      } else {
        input.removeEventListener("keyup", handleKeyUp);
        if (newMessage === "<br>") setNewMessage("");
      }
    }
  }, [isFocused, inputRef, newMessage]);
};

export const useChatInput = () => {
  const { newMessage, setNewMessage } = useMessageState();
  const { isFocused, setIsFocused, inputRef } = useFocusHandler(false);
  useKeyUpHandler(inputRef, isFocused, newMessage, setNewMessage);
  return { isFocused, setIsFocused, inputRef, newMessage };
};
