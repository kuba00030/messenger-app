import "./action-buttons.css";
import { DropdownItem } from "../../../../../../../components/ui/dropdown/DropdownItem";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import { DropdownCustomToggle } from "./dropdown-custom-toggle/DropdownCustomToggle";
import { IconButton } from "../../../../../../../components/ui/buttons/Buttons";
import { useUserContext } from "../../../../../../../context/user/UserContext";
import { useChatRoomContext } from "../../../../../../../context/chat/ChatRoomContext";
import { iconsClassBootsrap } from "../../../../../../../components/ui/icons/icons";
import { ChatMembersModal } from "../../../../../../../components/ui/modal/ChatMembersModalBody";
import { useModalContext } from "../../../../../../../context/modal/ModalContext";
import { ChatAddMemberModalBody } from "../../../../../../../components/ui/modal/ChatAddMembersModalBody";
import { useChatMembersContext } from "../../../../../../../context/chat/ChatMembers";
import { useEffect } from "react";
import { ChatChangeNicksModalBody } from "../../../../../../../components/ui/modal/ChatChangeNicksModalBody";

export const actionBtnStyle =
  "user-info-action-button fc-my-gray shadow-none border-0 mx-auto tr-02 fs-sm";
export const actionButtonWrapper =
  "fc-my-gray user-info-action-button-wrapper tr-02 d-flex flex-column fw-semibold fs-xxs text-center gap-2";

const ActionBtn = ({
  icon,
  text,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}) => {
  return (
    <div className={actionButtonWrapper}>
      <IconButton
        buttonProps={{
          type: "button",
          className: actionBtnStyle,
          onClick: onClick,
        }}
        icon={icon}
      />
      <span className="user-info-action-button-text tr-02">{text}</span>
    </div>
  );
};

export const ActionButtons = () => {
  const { user } = useUserContext();
  const { chatRoom, toggleFavourite, muteChatRoom, unmuteChatRoom } =
    useChatRoomContext();
  const {
    checkIfUserAdmin,
    getAdmins,
    blockMember,
    unblockMember,
    removeMember,

    members,
  } = useChatMembersContext();
  const { handleOpenModal, setModalContent } = useModalContext();

  const handleToggleFavourite = () => {
    toggleFavourite();
    // TODO:
    // edit state holding all chats (chat panel left side)
  };

  const handleNicksClick = () => {
    // TODO:
    // display nicks modal wid editable fields
    setModalContent({
      title: "Change nickname",
      size: "lg",
      component: <ChatChangeNicksModalBody />,
    });
    handleOpenModal();
  };

  const handleToggleMuteChatRoom = () => {
    // TODO:
    // mute chat room db
    if (chatRoom.isMuted) {
      unmuteChatRoom();
    } else {
      muteChatRoom();
    }
  };

  const handleShowMembers = () => {
    setModalContent({
      title: "Members",
      size: "sm",
      component: <ChatMembersModal />,
    });

    handleOpenModal();
  };

  const handleAddMember = () => {
    // TODO:
    // add member in db chat
    setModalContent({
      title: "Add new member",
      size: "sm",
      component: <ChatAddMemberModalBody />,
    });
    handleOpenModal();
  };

  const handleToggleBlockMember = () => {
    // TODO:
    // block user in db
    if (members[1].isBlocked) {
      unblockMember(members[1].id);
    } else {
      blockMember(members[1].id);
    }
  };

  const handleLeaveChatRoom = () => {
    if (checkIfUserAdmin(user.id)) {
      if (getAdmins().length > 1) {
        removeMember(user.id);
      } else {
        window.alert(`You can't leave this chat if you are the only admin.`);
      }
    } else {
      removeMember(user.id);
      // TODO:
      // in db remove member from the chat & change his role to 'participant'
      //  or always when we add someone set new member role as participant
    }
  };

  useEffect(() => {
    console.log(chatRoom.isMuted);
  }, [chatRoom]);
  return (
    <div className="d-flex flex-row align-items-center justify-content-between p-4 mt-4 border border-start-0 border-bottom-0 border-end-0 border-secondary">
      <ActionBtn
        text="FAVOURITE"
        icon={
          <i
            className={
              chatRoom.isFavourite
                ? `${iconsClassBootsrap.favouriteFill} fc-green-default`
                : iconsClassBootsrap.favourite
            }
          />
        }
        onClick={handleToggleFavourite}
      />
      <ActionBtn
        text="NICKS"
        icon={<i className={iconsClassBootsrap.edit} />}
        onClick={handleNicksClick}
      />

      <ActionBtn
        text="MUTE"
        icon={
          <i
            className={
              chatRoom.isMuted
                ? `${iconsClassBootsrap.muted} fc-green-default`
                : iconsClassBootsrap.mute
            }
          />
        }
        onClick={handleToggleMuteChatRoom}
      />

      <Dropdown as={ButtonGroup}>
        <div className={actionButtonWrapper}>
          <Dropdown.Toggle as={DropdownCustomToggle}></Dropdown.Toggle>
          <span className="user-info-action-button-text tr-02">MORE</span>
        </div>
        <Dropdown.Menu className="bg-my-dark tr-02">
          {chatRoom.type === "direct" && (
            <DropdownItem
              onClick={handleToggleBlockMember}
              text="Block"
              icon={<i className={iconsClassBootsrap.block} />}
            />
          )}
          {chatRoom.type === "direct" && (
            <DropdownItem
              onClick={() => {}}
              text="Delete"
              icon={<i className={iconsClassBootsrap.delete} />}
            />
          )}
          {chatRoom.type === "group" && (
            <>
              <DropdownItem
                onClick={handleShowMembers}
                text="Members"
                icon={<i className={iconsClassBootsrap.users} />}
              />
              {checkIfUserAdmin(user.id) && (
                <DropdownItem
                  onClick={handleAddMember}
                  text="Add"
                  icon={<i className={iconsClassBootsrap.addUser} />}
                />
              )}

              <DropdownItem
                onClick={handleLeaveChatRoom}
                text="Leave"
                icon={<i className={iconsClassBootsrap.signOut} />}
              />
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
