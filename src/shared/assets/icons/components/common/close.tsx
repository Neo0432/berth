'use client';
import { type FC, type SVGProps, useId } from 'react';
export const SvgClose: FC<SVGProps<SVGSVGElement>> = ({
  color = 'currentColor',
  ...props
}) => {
  const id = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 6 6 18M6 6l12 12" /></svg>;
};