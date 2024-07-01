export const useSearchbar = (func: (value: string) => void, delay: number) => {
  let timoutFunc: any;

  const search = (inputVal: string) => {
    clearTimeout(timoutFunc);
    timoutFunc = setTimeout(() => {
      func(inputVal);
    }, delay);
  };

  return { search };
};
