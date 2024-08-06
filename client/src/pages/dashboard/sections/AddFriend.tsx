import { FriendUser } from "../../../components/ui/lists/friends-list/FriendUser";
import { Searchbar } from "../../../components/ui/searchbar/Searchbar";
import { useSearchbar } from "../../../hooks/searchbar/useSearchBar";
import { TransitionContainer } from "../../../components/transition/container/TransitionContainer";
import { PrimaryButton } from "../../../components/ui/buttons/primary-button/PrimaryButton";

export const AddFriend = () => {
  const printSth = (value: string) => {
    console.log(`Searched user: ${value}`);
  };

  const { search } = useSearchbar(printSth, 600);

  return (
    <div className="d-flex flex-column align-items-center flex-fill">
      <h1 className="fw-semibold ms-4 ms-xl-0">Add new friend</h1>
      <div className="d-flex flex-column gap-4 mx-0 mx-xl-auto pt-4 rounded-2 bg-danger">
        <Searchbar onChange={(e) => search(e.target.value)} />
        {/* searched users list */}
        <div className="overflow-y-auto">
          <TransitionContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 mx-4 mx-xl-0 d-flex flex-column gap-4"
          >
            <FriendUser>
              <PrimaryButton
                onClick={() => console.log("Added new friend")}
                className="my-sm-auto text-light fw-semibold rounded-2 border-0 fs-sm bg-default btn-h-primary tr-02 fs-sm flex-fill flex-grow-1 flex-sm-grow-0 px-2 me-4"
                textValue="Add Friend"
                type="button"
              />
            </FriendUser>
          </TransitionContainer>
        </div>
      </div>
    </div>
  );
};
