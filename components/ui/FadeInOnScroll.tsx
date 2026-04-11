'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}

export function FadeInOnScroll({ children, delay = 0, y = 30 }: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
