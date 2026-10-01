'use client';

import { headerRoutes } from '@entities/header';
import { Menu } from '@shared/ui/menu/menu';
import { getClasses } from './styles/get-classes';
import { usePathname } from 'next/navigation';
import { Button } from '@shared/ui';
import Link from 'next/link';
import { ROUTES } from '@shared/config';
import { Logo } from '@shared/ui/logo/logo';

export const Header = () => {
  const { cnRoot, cnContent } = getClasses();

  //TODO: refactor with auth-logic
  const isAuthorized = false;

  const pathname = usePathname();

  return (
    <header className={cnRoot}>
      <div className={cnContent}>
        <Logo />

        <Menu>
          {headerRoutes.map((route, index) => (
            <Menu.Item key={index}>
              <Menu.Button
                as={Link}
                href={route.href}
                isSelected={route.href === pathname}
                aria-label={route.ariaLabel}
              >
                {route.label}
              </Menu.Button>
            </Menu.Item>
          ))}
        </Menu>

        {!isAuthorized && (
          <Button as={Link} href={ROUTES.signIn} variant="outline" size="s">
            Log In
          </Button>
        )}
      </div>
    </header>
  );
};
