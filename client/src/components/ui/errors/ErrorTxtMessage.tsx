type ErrorTxtMessage = {
  error: string;
  className: string;
};

export const ErrorTxtMessage = ({ error, className }: ErrorTxtMessage) => {
  return <div className={className}>{error}</div>;
};
