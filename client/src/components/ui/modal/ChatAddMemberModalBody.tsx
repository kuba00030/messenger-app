import { ProfileCard } from "../data/ProfileCard";
import { Searchbar } from "../searchbar/Searchbar";
import { iconsClassBootsrap } from "../icons/icons";
import { IconButton } from "../buttons/Buttons";
import { useChatMembersContext } from "../../../context/chat/ChatMembers";
import { useState } from "react";
import {
  TChatParticipant,
  useChatRoomContext,
} from "../../../context/chat/ChatRoomContext";
import { Spinner } from "react-bootstrap";
import { useSearchbar } from "../../../hooks/searchbar/useSearchBar";

const contactsFake: TChatParticipant[] = [
  {
    id: "2222",
    name: "Friend1",
    avatar: "",
    status: true,
    role: "participant",
  },
];

export const ChatAddMemberModalBody = () => {
  const { chatRoom } = useChatRoomContext();
  const { addMember, members, checkIfUserMember, removeMember } =
    useChatMembersContext();
  const [noteMembers, setNotMembers] = useState([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { search } = useSearchbar(500);
  const handleUpdateNotMembers = () => {
    // function on scroll down
    // get mote user friends that are not in current chat
  };

  const handleToggleMember = (newMember: TChatParticipant) => {
    if (!checkIfUserMember(newMember.id)) {
      addMember(newMember);
    } else {
      removeMember(newMember.id);
    }
  };

  const handleSetLoadingOn = () => {
    setLoading(true);
  };
  const handleSetLoadingDown = () => {
    setLoading(false);
  };

  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
    search(searchValue, handleSetLoadingDown, handleSetLoadingOn);
  };

  return (
    <>
      <Searchbar onChange={(e) => handleSearch(e)} />
      <div className="custom-modal-body overflow-auto position-relative">
        {loading ? (
          <div className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="success" />
          </div>
        ) : (
          contactsFake.map((contact) => (
            <div
              key={contact.id}
              className="d-flex flex-row align-items-center mx-4 fc-my-white"
            >
              <ProfileCard avatar={contact.avatar} displayName={contact.name} />
              <IconButton
                buttonProps={{
                  type: "button",
                  className:
                    "ms-auto user-info-action-button border-0 shadow-none",
                  onClick: () => handleToggleMember(contact),
                }}
                icon={
                  <i
                    className={
                      members.some((member) => member.id === contact.id)
                        ? iconsClassBootsrap.checked
                        : iconsClassBootsrap.addUser
                    }
                  />
                }
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};
