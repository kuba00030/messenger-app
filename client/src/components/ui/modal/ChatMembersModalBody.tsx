import { ButtonGroup, Dropdown } from "react-bootstrap";
import { useUserContext } from "../../../context/user/UserContext";
import { useToggleCompoenent } from "../../../hooks/toggle-component/useToggleComponent";
import { PrimaryButton } from "../buttons/Buttons";
import { actionButtonWrapper } from "../../../pages/dashboard/sections/chat-panel/chat-window/chat-data-details/action-buttons/ActionButtons";
import { DropdownCustomToggle } from "../../../pages/dashboard/sections/chat-panel/chat-window/chat-data-details/action-buttons/dropdown-custom-toggle/DropdownCustomToggle";
import { DropdownItem } from "../dropdown/DropdownItem";
import { iconsClassBootsrap } from "../icons/icons";
import { ProfileCard } from "../data/ProfileCard";
import { useChatMembersContext } from "../../../context/chat/ChatMembers";
import {
  TUser,
  useChatRoomContext,
} from "../../../context/chat/ChatRoomContext";
import { ScrollTrigger } from "../../container/Container";

const Member = ({ member }: { member: TUser }) => {
  const { setChatRoom } = useChatRoomContext();
  const { user } = useUserContext();
  const { checkIfUserAdmin, removeMember, blockMember, unblockMember } =
    useChatMembersContext();

  const handleToggleBlockMember = () => {
    removeMember(member.id);
  };

  const handleBlockUser = (member: TUser) => {
    // mute user
    if (member.isBlocked) {
      unblockMember(member.id);
    } else {
      blockMember(member.id);
    }
  };

  const handleSendMessage = (chatRoomID: string) => {
    // get chatRoom info (id,type,chatName,avatar)
    // and set new chat room (open new one)
  };

  return (
    <div className="d-flex flex-row align-items-center px-2">
      <ProfileCard
        avatar={member.avatar}
        displayName={member.nickName ? member.nickName : member.name}
      />
      {user.id !== member.id && (
        <Dropdown as={ButtonGroup} className="ms-auto">
          <div className={actionButtonWrapper}>
            <Dropdown.Toggle as={DropdownCustomToggle}></Dropdown.Toggle>
          </div>
          <Dropdown.Menu className="bg-my-dark tr-02">
            <DropdownItem
              onClick={() => {}}
              text="Message"
              icon={<i className={iconsClassBootsrap.chat} />}
            />
            <DropdownItem
              onClick={() => handleBlockUser(member)}
              text={`${member.isBlocked ? "Unblock" : "Block"}`}
              icon={<i className={iconsClassBootsrap.block} />}
            />
            {checkIfUserAdmin(user.id) && (
              <DropdownItem
                onClick={handleToggleBlockMember}
                text="Delete"
                icon={<i className={iconsClassBootsrap.delete} />}
              />
            )}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
};

export const ChatMembersModal = () => {
  const { members, getAdmins } = useChatMembersContext();
  const { isOpened: showAdmins, handleToggleComponent: handleShowAdmins } =
    useToggleCompoenent(false);
  const handleGetMoreMembers = () => {
    // TODO:
    // get more members (if they exist) if we scroll to bottom
  };

  return (
    <div className="d-flex flex-column overflow-hidden">
      <PrimaryButton
        type="button"
        className="rounded-0 mb-4 bg-default shadow-none border-0 fs-sm"
        textValue={`${showAdmins ? "Admins" : "All members"}`}
        onClick={handleShowAdmins}
      />
      <ScrollTrigger
        offset={0}
        containerClass="custom-modal-body"
        onBottom={handleGetMoreMembers}
      >
        {showAdmins
          ? getAdmins().map((member) => (
              <Member key={member.id} member={member} />
            ))
          : members.map((member) => <Member key={member.id} member={member} />)}
      </ScrollTrigger>
    </div>
  );
};
