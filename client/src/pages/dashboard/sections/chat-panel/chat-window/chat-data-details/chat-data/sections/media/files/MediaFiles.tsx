import { useState } from "react";
import {
  IconButton,
  ShowButton,
} from "../../../../../../../../../../components/ui/buttons/Buttons";
import { Header } from "../../../../../../../../../../components/ui/header/Header";
import { CustomModal } from "../../../../../../../../../../components/ui/modal/Modal";
import { Searchbar } from "../../../../../../../../../../components/ui/searchbar/Searchbar";
import { getArrayElements } from "../../../../../../../../../../utils/arrays/arrayFunctions";
import { toggleState } from "../../../../../../../../../../utils/buttons/buttonFuncs";
import {
  ChatDataHeaderContainer,
  ChatDataSectionContainer,
} from "../../chat-info/ChatInfo";
import { TChatAttachmentItem } from "../../../../../../../../../../context/chat/messages/CurrentChatRoomMsgs";
import { iconsClassBootsrap } from "../../../../../../../../../../components/ui/icons/icons";

const AttachedFile = ({
  displayedName,
  fileSize,
}: {
  displayedName: string;
  fileSize: string;
}) => {
  return (
    <div
      className="d-flex flex-row flex-shrink-0 align-items-center rounded-2 shadow-none mx-4 p-2 tr-02 file-button"
      tabIndex={0}
    >
      <div className="avatar-img-sm flex-shrink-0 rounded-circle d-flex justify-content-center align-items-center">
        <i className={`${iconsClassBootsrap.file} file-button-icon tr-02`} />
      </div>
      <div className="d-flex flex-column mx-2 overflow-hidden">
        <span className="fs-xs fc-my-gray fw-semibold m-0 p-0 text-start text-truncate">
          {displayedName}
        </span>
        <span className="fs-xxs fc-my-gray-darker m-0 p-0 text-start">
          {fileSize}
        </span>
      </div>

      <IconButton
        buttonProps={{
          type: "button",
          className:
            "ms-auto bg-transparent border-0 shadow-none file-button-action-btn tr-02",
        }}
        icon={<i className={iconsClassBootsrap.download} />}
      />
    </div>
  );
};

const AttachedFiles = ({ files }: { files: TChatAttachmentItem[] }) => {
  return files.map((file, index) => (
    <AttachedFile key={index} displayedName={file.name} fileSize={file.size} />
  ));
};

const ModalBody = ({ files }: { files: TChatAttachmentItem[] }) => {
  const handleSearch = () => {};
  return (
    <div className="d-flex flex-column flex-fill pt-4">
      <Searchbar onChange={handleSearch} />
      <div className="d-flex flex-column flex-fill custom-modal-body overflow-auto mt-4 gap-4">
        <AttachedFiles files={files} />
      </div>
    </div>
  );
};

type TChatAttachments = {
  attachments: TChatAttachmentItem[];
  attachmentsCount: number;
};

export const MediaFiles = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [chatAttachments, setChatAttachments] = useState({
    attachments: [
      {
        id: "2131234",
        url: "",
        size: "10",
        name: "mahalo",
      },
    ],
    attachmentsCount: 1,
  });

  // TODO: ask db for chatAttachments (files)

  const toggleModal = () => {
    toggleState(setIsOpened);
  };
  return (
    <>
      <ChatDataSectionContainer>
        <ChatDataHeaderContainer>
          <Header
            title="ATTACHED FILES"
            size="xs"
            fontWeight="semibold"
            color="gray"
          />
          {chatAttachments.attachments.length > 4 && (
            <ShowButton onClick={toggleModal} />
          )}
        </ChatDataHeaderContainer>
        <AttachedFiles
          files={getArrayElements(4, chatAttachments.attachments)}
        />
      </ChatDataSectionContainer>
      <CustomModal
        size="sm"
        title="ATTACHED FILES"
        show={isOpened}
        onClose={toggleModal}
      >
        <ModalBody files={chatAttachments.attachments} />
      </CustomModal>
    </>
  );
};
