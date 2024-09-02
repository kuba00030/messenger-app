export const queryElementById = (id: string): HTMLElement | null => {
  const element = document.getElementById(id);
  return element;
};
