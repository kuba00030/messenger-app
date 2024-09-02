import { useEffect, useState } from "react";

export const asyncHandler = <T,>(promise: Promise<T>) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    promise
      .then((res) => {
        setData(res);
      })
      .catch(() => {
        setData(null);
      });
  }, [promise]);

  return data;
};
