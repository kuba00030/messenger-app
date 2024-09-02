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

export type TMember = {
  id: string;
  avatar: string;
  name: string;
};

const Member = ({ member }: { member: TMember }) => {
  const { user } = useUserContext();
  const { checkIfUserAdmin, removeMember } = useChatMembersContext();

  const handleDeleteMember = () => {
    removeMember(member.id);
  };

  const handleMuteUser = () => {
    // mute user
  };

  const handleSendMessage = () => {
    // open chat with pointed user
  };
  return (
    <div className="d-flex flex-row align-items-center px-2">
      <ProfileCard avatar={member.avatar} displayName={member.name} />
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
              onClick={handleMuteUser}
              text="Mute"
              icon={<i className={iconsClassBootsrap.mute} />}
            />
            {checkIfUserAdmin(user.id) && (
              <DropdownItem
                onClick={handleDeleteMember}
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
  return (
    <div className="d-flex flex-column overflow-hidden">
      <PrimaryButton
        type="button"
        className="rounded-0 mb-4 bg-default shadow-none border-0 fs-sm"
        textValue={`${showAdmins ? "Admins" : "All members"}`}
        onClick={handleShowAdmins}
      ></PrimaryButton>
      <div className="custom-modal-body overflow-auto">
        {showAdmins
          ? getAdmins().map((member) => (
              <Member key={member.id} member={member} />
            ))
          : members.map((member) => <Member key={member.id} member={member} />)}
      </div>
    </div>
  );
};
