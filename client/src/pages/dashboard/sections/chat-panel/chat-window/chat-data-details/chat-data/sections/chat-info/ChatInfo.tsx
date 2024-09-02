import "../../chat-data.css";
import { Header } from "../../../../../../../../../components/ui/header/Header";
import { useUserContext } from "../../../../../../../../../context/user/UserContext";
import { useChatRoomContext } from "../../../../../../../../../context/chat/ChatRoomContext";
import { IconButton } from "../../../../../../../../../components/ui/buttons/Buttons";
import { iconsClassBootsrap } from "../../../../../../../../../components/ui/icons/icons";
import { useChatMembersContext } from "../../../../../../../../../context/chat/ChatMembers";

export const ChatDataSectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="d-flex flex-column border border-start-0 border-bottom-0 border-end-0 border-secondary py-4 gap-4">
      {children}
    </div>
  );
};

export const ChatDataHeaderContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="d-flex flex-row px-4 overflow-hidden text-truncate">
      {children}
    </div>
  );
};

const ChatInfoItem = ({ header, data }: { header: string; data: string }) => {
  return (
    <div className="mx-4 overflow-hidden">
      <span className="fs-xs fc-my-gray-darker d-block">{header}</span>
      <span className="fs-sm fc-my-gray">{data}</span>
    </div>
  );
};

export const ChatInfo = () => {
  const { user } = useUserContext();
  const { chatRoom } = useChatRoomContext();
  const { checkIfUserAdmin } = useChatMembersContext();

  return (
    <ChatDataSectionContainer>
      <ChatDataHeaderContainer>
        <Header size="xs" fontWeight="semibold" color="gray" title="INFO:" />
      </ChatDataHeaderContainer>
      <div className="d-flex flex-row">
        <ChatInfoItem
          header={chatRoom.type === "direct" ? "Name" : "Group name"}
          data={chatRoom.name}
        />
        {checkIfUserAdmin(user.id) && (
          <IconButton
            buttonProps={{
              className:
                "user-info-action-button fc-my-gray border-0 shadow-none ms-auto me-4 mt-auto",
            }}
            icon={<i className={iconsClassBootsrap.edit} />}
          />
        )}
      </div>
      {chatRoom.type === "direct" && (
        <ChatInfoItem header="Location" data={`${user.city} ${user.country}`} />
      )}
    </ChatDataSectionContainer>
  );
};
