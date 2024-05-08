import { motion, HTMLMotionProps } from "framer-motion";

type TransitionContainer = {
  children: React.ReactNode;
} & HTMLMotionProps<"div">;

export const TransitionContainer = ({
  children,

  ...props
}: TransitionContainer): React.ReactNode => {
  return <motion.div {...props}>{children}</motion.div>;
};
