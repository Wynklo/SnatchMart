import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Reveal({ as = "div", delay = 0, y = 28, children, ...rest }) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};
