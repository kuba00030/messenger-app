export const useSearchbar = (delay: number) => {
  let timoutFunc: any;

  const search = (
    inputVal: string,
    afterDelay: (value: string) => void,
    beforeDelay?: (value?: string) => void
  ) => {
    clearTimeout(timoutFunc);
    beforeDelay && beforeDelay(inputVal);
    timoutFunc = setTimeout(() => {
      afterDelay(inputVal);
    }, delay);
  };

  return { search };
};
