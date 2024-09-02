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
import { ChatAddMemberModalBody } from "../../../../../../../components/ui/modal/ChatAddMemberModalBody";
import { useChatMembersContext } from "../../../../../../../context/chat/ChatMembers";

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
  const { chatRoom } = useChatRoomContext();
  const { checkIfUserAdmin, getAdmins } = useChatMembersContext();
  const { handleOpenModal, setModalContent } = useModalContext();

  const handleMembersClick = () => {
    setModalContent({
      title: "Members",
      size: "sm",
      component: <ChatMembersModal />,
    });

    handleOpenModal();
  };

  const handleAddClick = () => {
    setModalContent({
      title: "Add new member",
      size: "sm",
      component: <ChatAddMemberModalBody />,
    });
    handleOpenModal();
  };
  // TODO:
  // functions for each button
  return (
    <div className="d-flex flex-row align-items-center justify-content-between p-4 mt-4 border border-start-0 border-bottom-0 border-end-0 border-secondary">
      <ActionBtn
        text="FAVOURITE"
        icon={<i className={iconsClassBootsrap.favourite} />}
        onClick={() => {}}
      />
      <ActionBtn
        text="NICKS"
        icon={<i className={iconsClassBootsrap.edit} />}
        onClick={() => {}}
      />
      {checkIfUserAdmin(user.id) ? (
        <ActionBtn
          text="ADD"
          icon={<i className={iconsClassBootsrap.addUser} />}
          onClick={handleAddClick}
        />
      ) : (
        <ActionBtn
          text="MUTE"
          icon={<i className={iconsClassBootsrap.mute} />}
          onClick={() => {}}
        />
      )}
      <Dropdown as={ButtonGroup}>
        <div className={actionButtonWrapper}>
          <Dropdown.Toggle as={DropdownCustomToggle}></Dropdown.Toggle>
          <span className="user-info-action-button-text tr-02">MORE</span>
        </div>
        <Dropdown.Menu className="bg-my-dark tr-02">
          {chatRoom.type === "direct" && (
            <DropdownItem
              onClick={() => {}}
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
                onClick={handleMembersClick}
                text="Members"
                icon={<i className={iconsClassBootsrap.users} />}
              />
              {getAdmins().length < 1 && (
                <DropdownItem
                  onClick={() => {}}
                  text="Leave"
                  icon={<i className={iconsClassBootsrap.signOut} />}
                />
              )}
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
