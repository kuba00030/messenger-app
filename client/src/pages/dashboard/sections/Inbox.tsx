import { Searchbar } from "../../../components/ui/searchbar/Searchbar";
import "../../../styles/pages/dashboard/inbox/inbox.css";
import { Button } from "react-bootstrap";
import { useNavbarContext } from "../../../context/navbar/navbarContext";
import { IconButton } from "../../../components/ui/buttons/icon-button/IconButton";
import { Conversation } from "../../../components/ui/inbox/conversation-list/Conversation";
import { ChatHeader } from "../../../components/ui/inbox/chat-window/ChatHeader";
import { ChatMessage } from "../../../components/ui/inbox/chat-window/ChatMessage";
import { useChatInput } from "../../../hooks/chat/useChatInput";
import { useWindowWidth } from "../../../hooks/window/useWindowWidth";
import { useCalculateInputLines } from "../../../hooks/styles/dimensions/calculate/useCalculateInputLines";

export const Inbox = () => {
  const { isFocused, setIsFocused, newMessage, inputRef } = useChatInput();
  const { inputLines } = useCalculateInputLines(inputRef, newMessage);
  const { setIsOpened, isOpened } = useNavbarContext();
  const { windowWidth } = useWindowWidth();
  const exampleMsgs = [
    {
      date: "yesterday 08:26",
      value: "Some random message 1",
    },
    { date: "yesterday 08:26", value: "Some random message 2" },
    { date: "yesterday 08:26", value: "Some random message 3" },
    { date: "yesterday 08:26", value: "Some random message 4" },
    { date: "yesterday 08:26", value: "Some random message 5" },
  ];
  return (
    <div className="d-flex flex-row flex-fill bg-white overflow-hidden">
      <div className="d-flex flex-column w-25 px-2 px-md-2 px-xl-4 pt-4 overflow-auto">
        {/* mobile open navigation button*/}
        <IconButton
          button={{
            className:
              "d-md-none border-gray shadow-none mx-auto mb-4 text-light fs-xl my-btn-normal",
            onClick: () => setIsOpened(!isOpened),
          }}
          icon="bi bi-list"
        />
        <Searchbar
          container={{
            className:
              "d-flex flex-row p-2 rounded-2 searchbar-container bg-white",
          }}
          searchIcon={{
            className:
              "bg-transparent border-0 text-secondary shadow-none fs-sm",
          }}
          input={{
            className:
              "px-2 text-secondary bg-transparent fs-sm fw-semibold border-0 w-100",
            placeholder: "Search for the user",
            onChange: () => console.log("a"),
          }}
        />
        {/* select sorting messages method */}
        <div className="d-flex flex-column flex-xl-row align-items-xl-center mt-4">
          <span className="text-secondary fw-semibold fs-sm">Sort by:</span>
          <select className="ms-0 ms-xl-2 me-auto me-xl-0 p-0 bg-transparent border-0 fw-semibold fs-sm text-truncate">
            <option className="fw-semibold fs-sm">Latest</option>
            <option className="fw-semibold fs-sm">Oldest</option>
          </select>
          <Button className="rounded-2 border-0 shadow-none ms-xl-auto fs-sm p-2 text-light fw-semibold my-btn-normal">
            Add new
          </Button>
        </div>
        {/* list of conversations*/}
        <Conversation />
      </div>
      {/* chat window */}
      <div className="d-flex flex-column border-start border-end border-gray w-75">
        <ChatHeader />
        <div className="d-flex flex-column flex-fill overflow-auto py-4 px-2 px-sm-4 gap-4">
          {exampleMsgs.map((message, index) => (
            <ChatMessage
              date={message.date}
              value={message.value}
              style={{
                containerClass: `${
                  index === 0 && "mt-auto"
                } d-flex flex-column me-auto`,
                dateClass: "text-secondary ms-auto",
              }}
            />
          ))}
        </div>
        <div className="d-flex flex-row py-4 gap-2 px-4">
          <div
            className={`d-flex flex-row mt-auto ${
              windowWidth < 992 && (newMessage || isFocused ? "d-none" : "")
            } `}
          >
            <IconButton
              button={{
                className:
                  "d-flex justify-content-center align-items-center bg-transparent my-auto fs-m border-0 rounded-circle btn-fill-gray text-secondary overflow-hidden tr-02 shadow-none",
              }}
              icon="bi bi-mic-fill"
            />
            <IconButton
              button={{
                className:
                  "d-flex justify-content-center align-items-center bg-transparent my-auto fs-m border-0 rounded-circle btn-fill-gray text-secondary overflow-hidden tr-02 shadow-none",
              }}
              icon="bi bi-file-earmark-image"
            />
            <IconButton
              button={{
                className:
                  "d-flex justify-content-center align-items-center bg-transparent my-auto fs-m border-0 rounded-circle btn-fill-gray text-secondary overflow-hidden tr-02 shadow-none",
              }}
              icon="bi bi-filetype-gif"
            />
          </div>
          <p
            className={`my-auto shadow-none overflow-auto border-0 fw-semibold text-break rounded-${
              inputLines !== 1 ? "2" : "pill"
            } bg-dark px-4 py-2 chat-input text-light flex-fill`}
            style={{ outline: "none", maxHeight: "3lh", minWidth: "50px" }}
            role="text-box"
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
            button={{
              className:
                "d-flex justify-content-center align-items-center mt-auto fs-m border-0 rounded-circle my-btn-normal overflow-hidden text-light send-btn tr-02 shadow-none",
            }}
            icon="bi bi-send"
          />
        </div>
      </div>
    </div>
  );
};
