import { IconButton } from '@codecademy/gamut';
import styled from '@emotion/styled';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import React from 'react';

export type AnimatedHeaderZoneProps = {
  visible?: boolean;
};

const animatedPopoverVariants: Variants = {
  enter: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const AnimatedHeaderZone: React.FC<AnimatedHeaderZoneProps> = ({
  children,
  visible,
}) => {
  return visible ? (
    <AnimatePresence>
      <motion.div
        animate="enter"
        exit="exit"
        initial="exit"
        variants={animatedPopoverVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  ) : null;
};

export const HeaderIconButton = styled(IconButton)`
  &:hover {
    background: none;
  }
`;
