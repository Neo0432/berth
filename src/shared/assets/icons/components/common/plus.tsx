'use client';
import { type FC, type SVGProps, useId } from 'react';
export const SvgPlus: FC<SVGProps<SVGSVGElement>> = ({
  color = 'currentColor',
  ...props
}) => {
  const id = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" {...props}><g clipPath={`url(#${id}__a)`}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12h15M12 4.5v15" /></g><defs><clipPath id={`${id}__a`}><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>;
};