import { Spinner } from "react-bootstrap";
import { useChatMembersContext } from "../../../context/chat/ChatMembers";
import { useToggleCompoenent } from "../../../hooks/toggle-component/useToggleComponent";
import { ScrollTrigger } from "../../container/Container";
import { Searchbar } from "../searchbar/Searchbar";
import { ProfileCard } from "../data/ProfileCard";
import { IconButton } from "../buttons/Buttons";
import { iconsClassBootsrap } from "../icons/icons";
import { Avatar } from "../avatar/regular-avatar/Avatar";
import { useState } from "react";
import { TUser } from "../../../context/chat/ChatRoomContext";

const EditableProfileCard = ({
  handleEditName,
  member,
}: {
  handleEditName: (
    memberName: string,
    newName: string,
    userId: string,
    oldNick?: string
  ) => void;
  member: TUser;
}) => {
  const { isOpened, handleToggleComponent } = useToggleCompoenent(false);
  const [newName, setNewName] = useState<string>(
    member.nickName ? member.nickName : member.name
  );

  const handleAccept = () => {
    if (newName) {
      handleEditName(member.name, newName, member.id, member.nickName);
      handleToggleComponent();
    } else {
      window.alert("Name cannot be ampty.");
    }
  };

  return isOpened ? (
    <div className="d-flex flex-row align-items-center mx-4 fc-my-white overflow-hidden mt-2 py-1">
      <Avatar
        size="sm"
        avatar={member.avatar}
        imgContainerBgClass="bg-my-gray"
      />
      <input
        className="bg-transparent flex-fill  fc-my-gray fs-sm mx-2 b-1 b-gray fw-semibold py-1 px-2 rounded-2"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <IconButton
        buttonProps={{
          type: "button",
          className:
            "user-info-action-button fc-my-gray ms-auto border-0 shadow-none",
          onClick: handleAccept,
        }}
        icon={<i className={iconsClassBootsrap.checked} />}
      />
    </div>
  ) : (
    <div className="d-flex flex-row align-items-center mx-4 mt-2">
      <ProfileCard
        avatar={member.avatar}
        displayName={member.nickName ? member.nickName : member.name}
      />
      <IconButton
        buttonProps={{
          type: "button",
          className:
            "user-info-action-button fc-my-gray ms-auto border-0 shadow-none",
          onClick: handleToggleComponent,
        }}
        icon={<i className={`${iconsClassBootsrap.edit}`} />}
      />
    </div>
  );
};

export const ChatChangeNicksModalBody = () => {
  const { members, editMemberName, updateMembers } = useChatMembersContext();
  const { isOpened: isSearching, setIsOpened: setIsSearching } =
    useToggleCompoenent(false);

  const handleEditNick = (
    memberName: string,
    newNick: string,
    userId: string,
    oldNick?: string
  ) => {
    // TODO:
    // EDIT PROPERTY IN DB

    if (newNick !== oldNick) {
      editMemberName(userId, newNick);
    }
    if (newNick === memberName) {
      const updatedMembers = members.map((member) => {
        if (member.id === userId) {
          return { ...member, name: memberName, nickName: undefined };
        }
        return member;
      });
      updateMembers(updatedMembers);
    }
  };

  const handleGetMoreMembers = () => {
    // TODO:
    // get more members of the chat
  };

  const handleIsSearching = () => {
    setIsSearching(true);
  };

  const handleSearch = () => {
    setIsSearching(false);
  };

  return (
    <>
      <Searchbar
        delay={500}
        immediateAction={handleIsSearching}
        delayedAction={handleSearch}
      />

      <ScrollTrigger
        offset={10}
        onBottom={handleGetMoreMembers}
        containerClass="custom-modal-body"
      >
        {isSearching ? (
          <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100">
            <Spinner variant="success" animation="border" />
          </div>
        ) : (
          members.map((member) => {
            return (
              <EditableProfileCard
                key={member.id}
                member={member}
                handleEditName={handleEditNick}
              />
            );
          })
        )}
      </ScrollTrigger>
    </>
  );
};
