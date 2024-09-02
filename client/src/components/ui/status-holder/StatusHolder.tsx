export const StatusHolder = ({
  status,
  ifTrueMsg,
  ifFalseMsg,

  className,
}: {
  status: boolean;
  ifTrueMsg: string;
  ifFalseMsg: string;
  className: string;
}) => {
  return <div className={className}>{status ? ifTrueMsg : ifFalseMsg}</div>;
};
