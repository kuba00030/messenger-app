import { ProfileCard } from "../data/ProfileCard";
import { Searchbar } from "../searchbar/Searchbar";
import { iconsClassBootsrap } from "../icons/icons";
import { IconButton } from "../buttons/Buttons";
import { useChatMembersContext } from "../../../context/chat/ChatMembers";
import { useEffect } from "react";
import {
  TUser,
  useChatRoomContext,
} from "../../../context/chat/ChatRoomContext";
import { Spinner } from "react-bootstrap";
import { useToggleCompoenent } from "../../../hooks/toggle-component/useToggleComponent";
import { useUserList } from "../../../hooks/chat/useUsers";
import { ScrollTrigger } from "../../container/Container";

export const ChatAddMemberModalBody = () => {
  const { chatRoom } = useChatRoomContext();

  const { users: noneMembers } = useUserList();

  const { addMember, members, checkIfUserMember, removeMember } =
    useChatMembersContext();

  const { isOpened: isSearching, setIsOpened: setIsSearching } =
    useToggleCompoenent(false);

  const handleGetNoneMembers = () => {
    console.log("more users");
    // TODO:
    // function on scroll down
    // get mote user friends that are not in current chat
  };

  const handleToggleMember = (newMember: TUser) => {
    if (!checkIfUserMember(newMember.id)) {
      addMember(newMember);
      // TODO:
      // add user id to chatroom members
    } else {
      removeMember(newMember.id);
      // TODO:
      // remove user id to chatroom members
    }
  };

  const handleIsSearching = (searchValue?: string) => {
    if (searchValue) setIsSearching(true);
  };

  const handleSearch = (searchValue: string) => {
    // TODO:
    // if nonMembers has user.name includes searchValue => setNonMebers
    // if nonMembers has not any user of user.name includes searchedValue => fetch users from db
    // with property user.name includes searchedValue
    // if searchedValue === "" again display 20 users that are not members of this chat
    setIsSearching(false);
  };

  useEffect(() => {
    // TODO:
    // Fetch 20 users that are not members of this chat
  }, []);

  return (
    <>
      <div className="my-4">
        <Searchbar
          delay={500}
          immediateAction={handleIsSearching}
          delayedAction={handleSearch}
        />
      </div>
      <ScrollTrigger
        offset={100}
        onBottom={handleGetNoneMembers}
        containerClass="custom-modal-body"
      >
        {isSearching ? (
          <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100">
            <Spinner variant="success" animation="border" />
          </div>
        ) : (
          noneMembers.map((noneMember) => (
            <div
              key={noneMember.id}
              className="d-flex flex-row align-items-center mx-4 fc-my-white"
            >
              <ProfileCard
                avatar={noneMember.avatar}
                displayName={noneMember.name}
              />
              <IconButton
                buttonProps={{
                  type: "button",
                  className:
                    "ms-auto user-info-action-button border-0 shadow-none",
                  onClick: () => handleToggleMember(noneMember),
                }}
                icon={
                  <i
                    className={
                      members.some((member) => member.id === noneMember.id)
                        ? iconsClassBootsrap.checked
                        : iconsClassBootsrap.addUser
                    }
                  />
                }
              />
            </div>
          ))
        )}
      </ScrollTrigger>
    </>
  );
};
