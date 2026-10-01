import { FC } from 'react';

import { MenuItem, type MenuItemProps } from './ui/menu-item/menu-item';
import { MenuButton, type MenuButtonProps } from './ui/menu-button/menu-button';
import { MenuList, MenuListProps } from './ui/menu-list/menu-list';

export type MenuProps = FC<MenuListProps> & {
  Item: typeof MenuItem;
  Button: typeof MenuButton;
};

export const Menu: MenuProps = (props) => {
  return <MenuList {...props} />;
};

Menu.Item = MenuItem;
Menu.Button = MenuButton;
