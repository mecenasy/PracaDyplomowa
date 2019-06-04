import React, { FC } from 'react';
import { Border, Image, ImageWrapper } from './parts';

interface PhotoProps {
  src: string;
  title?: string;
  alt?: string;
}

const Photo: FC<PhotoProps> = (props) => (
  <Border>
    <ImageWrapper>
      <Image {...props} />
    </ImageWrapper>
  </Border>
);

export default Photo;
