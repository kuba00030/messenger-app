import "./new-friend.css";
import "../../../../styles/pages/dashboard/add-friend/add-friend.css";
import { Avatar } from "../../avatar/Avatar";
import { TransitionContainer } from "../../../transition/container/TransitionContainer";
import { PrimaryButton } from "../../buttons/primary-button/PrimaryButton";

type NewFriend = {
  userData: {
    fullName: string;
    address: string;
  };
};

export const NewFriend = ({ userData }: NewFriend) => {
  const handleAddfriend = (e: any) => {
    e.stopPropagation();
  };
  return (
    <TransitionContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mt-4 d-flex flex-column gap-4 add-friend-ui-element mx-auto"
    >
      <div
        className="d-flex flex-row rounded-2 friends-list-item border-0 overflow-hidden text-start tr-02"
        style={{ cursor: "pointer" }}
        tabIndex={0}
      >
        <div
          className="color-bar"
          style={{ height: "100%", width: "10px" }}
        ></div>
        <div className="d-flex flex-column flex-sm-row flex-fill justify-content-center gap-4 gap-sm-0 justify-content-center text-truncate py-2 py-sm-0">
          <div className="d-flex flex-row flex-sm-fill gap-2 ms-2">
            <Avatar className="avatar-img-sm rounded-circle bg-dark flex-shrink-0 my-sm-auto " />
            <div className="d-flex flex-column gap-2 text-secondary my-sm-auto me-4 flex-sm-fill text-truncate">
              <span className="fs-sm fw-semibold">{userData.fullName}</span>
              <div className="fs-xs text-truncate">
                <span className="">
                  Country:<span className="fw-bold ms-1">USA</span>
                </span>
                <span className="ms-2">
                  City:<span className="fw-bold ms-1">Dallas</span>
                </span>
              </div>
            </div>
          </div>
          <PrimaryButton
            onClick={(e) => handleAddfriend(e)}
            className="text-light fw-semibold rounded-2 border-0 fs-sm bg-default add-friend-btn btn-h-primary tr-02 flex-sm-grow-0 my-sm-auto mx-2 mx-sm-0 me-sm-4"
            textValue="Invite"
            type="button"
          />
        </div>
      </div>
    </TransitionContainer>
  );
};
