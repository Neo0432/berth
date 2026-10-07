import Link, { type LinkProps } from 'next/link';
import type { FC } from 'react';

import { SvgLogoDark, SvgLogoLight } from '@shared/assets/icons/components/complex';
import { ROUTES } from '@shared/config';

interface LogoBaseProps {
  className?: string;
  variant: 'light' | 'dark';
}

interface LogoLinkProps extends LogoBaseProps, Pick<LinkProps, 'href'> {
  isLink?: true;
}

interface LogoStaticProps extends LogoBaseProps {
  isLink?: false;
  href?: never;
}

export type LogoProps = LogoLinkProps | LogoStaticProps;

export const Logo: FC<LogoProps> = ({ className, variant, isLink = true, href = ROUTES.root }) => {
  const LogoIcon = variant === 'dark' ? SvgLogoDark : SvgLogoLight;

  if (isLink && href) {
    return (
      <Link className={className} href={href}>
        <LogoIcon />
      </Link>
    );
  }

  return (
    <span className={className}>
      <LogoIcon />
    </span>
  );
};
