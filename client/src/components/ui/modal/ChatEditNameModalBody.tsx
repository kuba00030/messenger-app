import { useState } from "react";
import { InputFloatingLabel } from "../inputs/floating-labels/InputFloatingLabel";
import { HoverFillButton, PrimaryButton } from "../buttons/Buttons";
import { useModalContext } from "../../../context/modal/ModalContext";
import { useChatRoomContext } from "../../../context/chat/ChatRoomContext";

export const ChatEditNameModalBody = () => {
  const { chatRoom, editChatName } = useChatRoomContext();
  const { handleCloseModal } = useModalContext();
  const [newName, setNewName] = useState<string>(chatRoom.name);

  const onChange = (newName: string) => {
    setNewName(newName);
  };

  const handleChangeChatName = () => {
    if (newName !== chatRoom.name) {
      handleCloseModal();
      editChatName(newName);
    }
  };
  return (
    <>
      <div className="w-100 text-center">
        <span className="fc-my-gray fs-sm">
          Changing the name of a group chat will cause it to be changed for
          everyone.
        </span>
      </div>
      <InputFloatingLabel
        labelClass="fc-my-gray bg-my-dark tr-02 ms-2 fw-semibold fs-sm"
        inputClass="fc-my-gray w-100 px-2 py-3 bg-transparent fw-semibold fs-sm"
        containerClass="mx-4 mt-2 mb-4 rounded-2 tr-02"
        inputType="text"
        labelVal="Chat name"
        onChange={onChange}
        inputValue={newName}
      />
      <div className="d-flex flex-row gap-2 justify-content-end px-4 w-100 mb-4">
        <HoverFillButton
          type="button"
          textValue="Cancel"
          onClick={handleCloseModal}
        />
        <PrimaryButton
          className={`border-0 ${
            chatRoom.name === newName ? "bg-default-darker" : "bg-default"
          }`}
          type="button"
          textValue="Save"
          onClick={handleChangeChatName}
        />
      </div>
    </>
  );
};
