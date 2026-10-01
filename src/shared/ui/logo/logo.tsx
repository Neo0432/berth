import { SvgLogo } from '@shared/assets/icons/components/complex';
import { ROUTES } from '@shared/config';
import Link, { LinkProps } from 'next/link';
import { FC } from 'react';

interface LogoBaseProps {
  className?: string;
}

interface LogoLinkProps extends LogoBaseProps, Pick<LinkProps, 'href'> {
  isLink?: true;
}

interface LogoStaticProps extends LogoBaseProps {
  isLink?: false;
  href?: never;
}

export type LogoProps = LogoLinkProps | LogoStaticProps;

export const Logo: FC<LogoProps> = ({ className, isLink = true, href = ROUTES.home }) => {
  if (isLink && href) {
    return (
      <Link className={className} href={href}>
        <SvgLogo />
      </Link>
    );
  }

  return (
    <span className={className}>
      <SvgLogo />
    </span>
  );
};
