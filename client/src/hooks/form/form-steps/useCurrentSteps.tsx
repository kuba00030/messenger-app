import { useState } from "react";

export const useFormSteps = (initCurrStep: number, initPrevStep: number) => {
  const [currStep, setCurrStep] = useState<number>(initCurrStep);

  const [prevStep, setPrevStep] = useState<number>(initPrevStep);

  const deltaSteps = currStep - prevStep;

  return { currStep, setCurrStep, prevStep, setPrevStep, deltaSteps };
};
