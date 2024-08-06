import "./search-bar.css";

type Searchbar = {
  containerClass?: string;
  iconClass?: string;
  inputClass?: string;
  onChange: (e?: any) => void;
};

export const Searchbar = ({
  containerClass,
  iconClass,
  inputClass,
  onChange,
}: Searchbar) => (
  <div
    className={
      containerClass
        ? containerClass
        : "d-flex flex-row gap-2 p-2 rounded-2 mx-4 mx-xl-0 searchbar-container bg-white"
    }
  >
    <i className={`bi bi-search ${iconClass ? iconClass : "fs-sm"}`} />

    <input
      className={
        inputClass
          ? inputClass
          : "d-flex flex-fill border-0 text-secondary shadow-none fs-sm fw-semibold"
      }
      onChange={onChange}
    />
  </div>
);
