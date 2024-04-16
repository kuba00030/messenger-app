import { motion, HTMLMotionProps } from "framer-motion";

type TransitionSlideIn = {
  page: React.ReactNode;
  containerClass: string;
} & HTMLMotionProps<"div">;

export const TransitionSlideIn = ({
  page,
  containerClass,
  ...props
}: TransitionSlideIn): React.ReactNode => {
  return (
    <motion.div className={containerClass} {...props}>
      {page}
    </motion.div>
  );
};
