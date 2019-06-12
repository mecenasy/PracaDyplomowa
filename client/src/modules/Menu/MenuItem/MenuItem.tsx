import React, { FC } from 'react';
import { Link , NavLink} from 'react-router-dom';
import * as P from './parts';
import d from '../../../assets/001-browser.svg';

interface MenuItemProps {
  icon: string;
  color: string;
  link: string;
  leftBarMenu: boolean;
}

const MenuItem: FC<MenuItemProps> = ({
  link,
}) => (
    <P.BoxWithShadow>
      <Link to={link}>
        <P.Photo src={d} />
        adasldkas;dlkad;alkd;asldka;dlka;dlkasd;alskd
      </Link>
    </P.BoxWithShadow>
  );

export default MenuItem;
