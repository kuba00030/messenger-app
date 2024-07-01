import { Button } from "react-bootstrap";

import { FriendUser } from "../../../components/ui/lists/items/FriendUser";
import { Searchbar } from "../../../components/ui/searchbar/Searchbar";
import { useSearchbar } from "../../../hooks/searchbar/useSearchBar";
import { TransitionContainer } from "../../../components/transition/container/TransitionContainer";
import "../../../styles/pages/dashboard/add-friend/addFriend.css";

export const AddFriend = () => {
  const printSth = (value: string) => {
    console.log(`Searched user: ${value}`);
  };

  const { search } = useSearchbar(printSth, 600);

  return (
    <div className="d-flex flex-fill">
      <div className="d-flex flex-column mx-0 mx-xl-auto pt-4 rounded-2 new-friends-list">
        <h1 className="fw-semibold ms-4 ms-xl-0">Add new friend</h1>
        <Searchbar
          searchIcon={{
            className:
              "bg-transparent border-0 text-secondary shadow-none fs-sm",
          }}
          input={{
            className:
              "px-2 text-secondary bg-transparent fs-sm fw-semibold border-0 w-100",
            placeholder: "Enter the invitation code",
            onChange: (e) => search(e.target.value),
          }}
        />
        {/* searched users list */}
        <div className="">
          <TransitionContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 mx-4 mx-xl-0"
          >
            <FriendUser
              container={{
                className:
                  "d-flex flex-wrap rounded-2 p-4 friends-list-item tr-02 bg-white",
              }}
              userData={{
                dataContainer: {
                  className:
                    "d-flex flex-column gap-2 text-secondary fw-semibold ms-2 ms-sm-4 my-auto text-truncate flex-sm-fill",
                },
                avatar: {
                  className: "avatar-img-sm rounded-circle my-auto bg-dark",
                },
                fullName: { value: "User name", className: "fs-m" },
                data: { value: "Address", className: "fs-sm" },
              }}
              children={
                <Button
                  onClick={() => console.log("Added new friend")}
                  className="my-btn-normal mt-4 my-sm-auto w-sm-auto text-light fw-semibold rounded-2 fs-sm shadow-none"
                >
                  Add Friend
                </Button>
              }
            />
          </TransitionContainer>
        </div>
      </div>
    </div>
  );
};
