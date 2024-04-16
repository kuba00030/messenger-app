type InvalidIcon = {
  className: string;
};

export const InvalidIcon = ({ className }: InvalidIcon) => {
  return <i className={`bi bi-exclamation-circle ${className}`} />;
};
