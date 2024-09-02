type HandleFormStep = (formStep: number) => void;

export const hendleNext = (
  setCurrentStep: HandleFormStep,
  currentStep: number,
  setPrevStep: HandleFormStep,
  lastStep: number,
  formValid: boolean
) => {
  if (currentStep < lastStep && formValid) {
    setPrevStep(currentStep);
    setCurrentStep(currentStep + 1);
  }
};

export const handleBack = (
  setCurrentStep: HandleFormStep,
  currentStep: number,
  setPrevStep: HandleFormStep
) => {
  if (currentStep > 0) {
    setPrevStep(currentStep);
    setCurrentStep(currentStep - 1);
  }
};
