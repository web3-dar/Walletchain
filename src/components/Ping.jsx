import { motion } from "framer-motion";
import Band from "./Band";
import Logo from "./Navbar/Logo";
import { LOOP_DURATION } from "..";

const Ping = () => {
  return (
    <div className="relative flex justify-center">
      <Logo />
      <Band delay={0} />
      <Band delay={LOOP_DURATION * 0.25} />
      <Band delay={LOOP_DURATION * 0.5} />
      <Band delay={LOOP_DURATION * 0.75} />
    </div>
  );
};

export default Ping;
