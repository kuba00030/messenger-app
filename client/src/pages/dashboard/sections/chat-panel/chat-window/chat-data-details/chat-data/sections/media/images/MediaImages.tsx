import { Lightbox as ImageSlider } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "../../../chat-data.css";
import { ShowButton } from "../../../../../../../../../../components/ui/buttons/Buttons";
import { Header } from "../../../../../../../../../../components/ui/header/Header";
import { getArrayElements } from "../../../../../../../../../../utils/arrays/arrayFunctions";
import { toggleState } from "../../../../../../../../../../utils/buttons/buttonFuncs";
import {
  ChatDataHeaderContainer,
  ChatDataSectionContainer,
} from "../../chat-info/ChatInfo";
import {
  Counter,
  Download,
  Fullscreen,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import { CustomModal } from "../../../../../../../../../../components/ui/modal/Modal";
import { useOnStateChange } from "../../../../../../../../../../hooks/on-change/onStateChange";
import { useScrollPosition } from "../../../../../../../../../../hooks/scrollbar/useScrollbarPosition";
import { forwardRef, useState } from "react";

const Image = ({
  photoUrl,
  children,
  onClick,
  containerClass,
}: {
  containerClass?: string;
  onClick: () => void;
  photoUrl: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`position-relative overflow-hidden rounded-2 bg-my-gray ${containerClass}`}
      onClick={onClick}
    >
      <img src={photoUrl} style={{ width: "100%", height: "100%" }}></img>
      {children}
    </div>
  );
};

const ImageOverlay = () => {
  return (
    <div className="position-absolute top-0 d-flex justify-content-center align-items-center border-0 w-100 h-100 fw-semibold fc-my-white media-last-photo">
      +10
    </div>
  );
};

type TImageGallery = {
  images: { src: string }[];
  imgOnClick: (index: number) => void;
};

const ImageGallery = ({ images, imgOnClick }: TImageGallery) => {
  return (
    <div className="d-flex flex-row justify-content-start gap-2 mx-4">
      {getArrayElements(4, images).map((image, index) => {
        return index === 3 ? (
          <Image
            key={index}
            photoUrl={image.src}
            containerClass="media-imgage"
            onClick={() => imgOnClick(index)}
          >
            <ImageOverlay />
          </Image>
        ) : (
          <Image
            key={index}
            photoUrl={image.src}
            onClick={() => {
              imgOnClick(index);
            }}
            containerClass="media-imgage"
          />
        );
      })}
    </div>
  );
};

const ModalImageGallery = forwardRef<HTMLDivElement, TImageGallery>(
  ({ images, imgOnClick }, ref) => {
    return (
      <div className="modal-images-container overflow-auto p-4" ref={ref}>
        {images.map((img, index) => {
          return (
            <Image
              key={img.src + index}
              containerClass="modal-media-image"
              photoUrl={img.src}
              onClick={() => imgOnClick(index)}
            />
          );
        })}
      </div>
    );
  }
);

type TChatAttachments = {
  attachments: { src: string }[];
  attachmentsCount: number;
};

export const MediaImages = () => {
  const { containerRef } = useScrollPosition({
    offset: 0,
    onBottom: handleOnScrollGallery,
  });

  const [chatAttachments, setChatAttachments] = useState<TChatAttachments>({
    attachments: [
      {
        src: "https://cdn.shopify.com/app-store/listing_images/80a8f3912d0aa304593b7a28771fe95b/icon/CMfEmKi3i_sCEAE=.jpeg",
      },
    ],
    attachmentsCount: 1,
  });

  const [lightBoxOpened, setLightBoxOpened] = useState<boolean>(false);

  const [modalIsOpened, setIsModalOpened] = useState<boolean>(false);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useOnStateChange(currentIndex, handleOnLastImage);

  function toggleLightBox() {
    toggleState(setLightBoxOpened);
  }

  function handleClose() {
    toggleLightBox();
    setCurrentIndex(0);
  }

  function toggleModal() {
    toggleState(setIsModalOpened);
    setCurrentIndex(0);
  }

  function handleImgClick(index: number) {
    setCurrentIndex(index);
    toggleLightBox();
  }

  function handleOnLastImage() {
    if (currentIndex === chatAttachments.attachments.length - 1) {
      // fetch more images
      console.log("Images fetched");
    }
  }

  function handleOnScrollGallery() {
    // fetch more images
    console.log("Images fetched");
  }

  // TODO: ask db for images

  return (
    <>
      <ChatDataSectionContainer>
        <ChatDataHeaderContainer>
          <Header size="xs" fontWeight="semibold" color="gray" title="IMAGES" />
          {chatAttachments.attachments.length > 4 && (
            <ShowButton onClick={toggleModal} />
          )}
        </ChatDataHeaderContainer>
        <ImageGallery
          images={chatAttachments.attachments}
          imgOnClick={handleImgClick}
        />
      </ChatDataSectionContainer>
      <CustomModal
        size="lg"
        title="IMAGES"
        show={modalIsOpened}
        onClose={toggleModal}
      >
        <ModalImageGallery
          images={chatAttachments.attachments}
          imgOnClick={handleImgClick}
          ref={containerRef}
        />
      </CustomModal>
      <ImageSlider
        on={{
          view: ({ index: currentIndex }) => setCurrentIndex(currentIndex),
        }}
        index={currentIndex}
        open={lightBoxOpened}
        slides={chatAttachments.attachments}
        close={handleClose}
        plugins={[Download, Fullscreen, Counter, Thumbnails]}
        counter={{ container: { style: { top: 0, color: "FFFF" } } }}
        carousel={{ finite: true }}
      />
    </>
  );
};
