import { type FC } from 'react';

import { MenuItem, type MenuItemProps } from './ui/menu-item/menu-item';
import { MenuRoot, type MenuRootProps } from './ui/menu-root/menu-root';

export type MenuProps = FC<MenuRootProps> & {
  Item: FC<MenuItemProps>;
};

export const Menu: MenuProps = (props) => {
  return <MenuRoot {...props} />;
};

Menu.Item = MenuItem;
