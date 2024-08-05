import { motion } from "framer-motion";
import { LOOP_DURATION } from "..";

const Band = ({ delay }) => {
  return (
    <motion.span
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{
        opacity: 0,
        scale: 0.25,
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: 1,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.5, 0.75, 1],
        duration: LOOP_DURATION,
        ease: "linear",
        delay,
      }}
      className="absolute left-[50%] top-[50%] z-0 h-56 w-56 rounded-full border-[1px] border-[#656BAE] bg-gradient-to-br from-blue-500/50 to-blue-800/20 shadow-xl shadow-blue-500/40"
    />
  );
};

export default Band;
