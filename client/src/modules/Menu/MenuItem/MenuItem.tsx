import React, { FC } from 'react';
import * as P from './parts';

interface MenuItemProps {
  icon: string;
  color?: string;
  link: string;
  isSimple: boolean;
  text: string;
}

const MenuItem: FC<MenuItemProps> = ({
  link,
  isSimple,
  text,
  icon,
  color,
}) => (
    <P.BoxWithShadow isSimple={isSimple} color={color}>
      <P.Link to={link}>
        <P.Photo src={icon} />
        <P.Title>
          {text}
        </P.Title>
      </P.Link>
    </P.BoxWithShadow>
  );

export default MenuItem;
