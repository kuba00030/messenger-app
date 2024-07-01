import { HTMLAttributes, InputHTMLAttributes } from "react";
import { Button } from "react-bootstrap";

type Searchbar = {
  containerClass?: string;
  searchIcon?: HTMLAttributes<HTMLButtonElement>;
  input: InputHTMLAttributes<HTMLInputElement>;
};

export const Searchbar = ({ containerClass, searchIcon, input }: Searchbar) => (
  <div
    className={
      containerClass
        ? containerClass
        : "d-flex flex-row p-2 rounded-2 mt-4 mx-4 mx-xl-0 searchbar-container bg-white"
    }
  >
    <Button {...searchIcon}>
      <i
        className="bi bi-search  "
        style={{ width: "100%", height: "100%" }}
      ></i>
    </Button>
    <input {...input} />
  </div>
);
