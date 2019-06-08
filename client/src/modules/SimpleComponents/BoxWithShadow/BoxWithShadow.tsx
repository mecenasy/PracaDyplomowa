import React, { FC } from 'react';
import { Box } from './parts';

interface BoxWithShadowProps {
  className?: string;
}
const BoxWithShadow: FC<BoxWithShadowProps> = ({ children, className }) => (
  <Box className={className}>
    {children}
  </Box>
);

export default BoxWithShadow;
