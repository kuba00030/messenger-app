export const toggleState = (
  func: (callback: (prevState: boolean) => boolean) => void
) => {
  func((prevState) => !prevState);
};
