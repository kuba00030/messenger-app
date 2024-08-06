import "./friend-user.css";
import { Avatar } from "../../avatar/Avatar";

type FriendUser = {
  containerClass?: string;
  userData?: {
    dataContainer?: string;
    avatarClass?: string;
    fullName?: { value: string; className?: string };
    data?: { value: string; className?: string };
  };
  children?: React.ReactNode;
};

export const FriendUser = ({
  containerClass,
  userData,
  children,
}: FriendUser) => (
  <div
    className={
      containerClass
        ? containerClass
        : "d-flex flex-row align-items-center flex-wrap rounded-2 gap-4 friends-list-item tr-02 bg-white"
    }
    style={{ height: "100px" }}
  >
    <div className="bg-danger" style={{ height: "100%", width: "5px" }}></div>
    <Avatar
      className={
        userData?.avatarClass
          ? userData.avatarClass
          : "avatar-img-sm rounded-circle my-auto bg-dark flex-shrink-0"
      }
    />
    <div
      className={
        userData?.dataContainer
          ? userData.dataContainer
          : "d-flex flex-column gap-2 text-secondary fw-semibold ms-2 ms-sm-4 my-auto text-truncate flex-sm-fill"
      }
    >
      <span
        className={
          userData?.fullName?.className ? userData.fullName.className : "fs-m"
        }
      >
        {userData?.fullName?.value ? userData.fullName.value : "User name"}
      </span>
      <span
        className={
          userData?.data?.className ? userData.data.className : "fs-sm"
        }
      >
        {userData?.data?.value ? userData.data.value : "Address"}
      </span>
    </div>
    {children}
  </div>
);
