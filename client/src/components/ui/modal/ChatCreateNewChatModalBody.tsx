import "./modal.css";
import { Form } from "react-bootstrap";
import { Searchbar } from "../searchbar/Searchbar";
import { InputFloatingLabel } from "../inputs/floating-labels/InputFloatingLabel";
import { ScrollTrigger } from "../../container/Container";
import { TUser } from "../../../context/chat/ChatRoomContext";
import { HoverFillButton, IconButton } from "../buttons/Buttons";
import { iconsClassBootsrap } from "../icons/icons";
import { useModalContext } from "../../../context/modal/ModalContext";
import { useState } from "react";

const AlphabeticalList = ({
  users,
  handleAddParticipant,
  newChatParticipants,
}: {
  users: TUser[];
  handleAddParticipant: (participant: TUser) => void;
  newChatParticipants: TUser[];
}) => {
  const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));

  const groupedUsers = sortedUsers.reduce<{ [key: string]: TUser[] }>(
    (acc, user) => {
      const firstLetter = user.name[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(user);
      return acc;
    },
    {}
  );

  return (
    <div>
      {Object.keys(groupedUsers).map((letter) => (
        <div className="d-flex flex-column" key={letter}>
          <div className="fc-my-gray fs-xxs fw-semibold fc-green-default d-flex flex-row align-items-center gap-2 mt-2 ms-4 me-1">
            {letter}
            <span className="b-1 b-gray flex-fill"></span>
          </div>
          {groupedUsers[letter].map((user) => (
            <button
              onClick={() => handleAddParticipant(user)}
              className={`fc-my-gray fw-semibold flex-fill border-0 text-start bg-transparent ps-4 tr-02 p-2 ${
                newChatParticipants.some(
                  (newParticipant) => newParticipant.id === user.id
                )
                  ? "bg-default-darker fc-my-white"
                  : "contact fc-my-white-h"
              }`}
              key={user.id}
            >
              {user.name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

const usersList: TUser[] = [
  { id: "1", name: "John", avatar: "", role: "participant" },
  { id: "2", name: "Anna", avatar: "", role: "admin" },
  { id: "3", name: "Zoe", avatar: "", role: "participant" },
  { id: "4", name: "Michael", avatar: "", role: "admin" },
];

export const ChatCreateNewChatModalBody = () => {
  const [inputVal, setInputVal] = useState<string>("");
  const [newChatParticipants, setNewChatParticipants] = useState<TUser[]>([]);
  const { handleCloseModal } = useModalContext();
  const handleToggleParticipant = (newParticipant: TUser) => {
    if (newChatParticipants.some((newParticipant) => newParticipant.id)) {
      setNewChatParticipants(
        newChatParticipants.filter(
          (participant) => participant.id !== newParticipant.id
        )
      );
    } else {
      setNewChatParticipants([...newChatParticipants, newParticipant]);
    }
  };
  const handleCreateChat = (chatId: string) => {
    console.log(chatId);
    handleCloseModal();
    // TODO:
    // set new chat room but dont set it in db yet. set it in db with first msg send
  };
  const handleGetMoreContacts = () => {
    // TODO:
    // get more contacts from db
  };

  return (
    <>
      <div className="my-4">{/* <Searchbar /> */}</div>
      <div className="d-flex flex-column gap-4 mb-4">
        <InputFloatingLabel
          containerClass="flex-fill rounded-1 py-2 tr-02 mx-4"
          inputType="text"
          labelVal="Chat name"
          labelClass="fc-my-gray custom-floating-label bg-my-dark tr-02 fs-sm mx-2 fw-semibold"
          inputClass="fc-my-gray bg-transparent px-2 fs-sm fw-semibold w-100"
          onChange={setInputVal}
          inputValue={inputVal}
        />
        <div className="mx-4">
          <Form.Select className="b-default-f bg-my-dark w-100 fc-my-gray shadow-none b-1 b-gray p-2 rounded-1 fw-semibold fs-sm">
            <option className="bg-my-gray" value={1}>
              Direct
            </option>
            <option className="bg-my-gray" value={2}>
              Group
            </option>
          </Form.Select>
        </div>
        <ScrollTrigger
          offset={100}
          onBottom={handleGetMoreContacts}
          containerClass="custom-modal-body"
        >
          <AlphabeticalList
            users={usersList}
            handleAddParticipant={handleToggleParticipant}
            newChatParticipants={newChatParticipants}
          />
        </ScrollTrigger>
        <div className="d-flex flex-row justify-content-end gap-2">
          <HoverFillButton
            textValue="Cancel"
            type="button"
            onClick={handleCloseModal}
          />
          <IconButton
            buttonProps={{
              type: "button",
              className: "bg-default border-0 me-4 rounded-1",
            }}
            icon={<i className={iconsClassBootsrap.send} />}
          />
        </div>
      </div>
    </>
  );
};
