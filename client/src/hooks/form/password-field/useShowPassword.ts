import { useState } from "react";

export const useShowPassword = (initialValue: string) => {
  const [inputType, setInputType] = useState<string>(initialValue);

  const togglePasswordVisibility = () => {
    setInputType((prevInputType) =>
      prevInputType === "text" ? "password" : "text"
    );
  };

  return { togglePasswordVisibility, inputType };
};
