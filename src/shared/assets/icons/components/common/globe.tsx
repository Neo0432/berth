'use client';
import { type FC, type SVGProps, useId } from 'react';
export const SvgGlobe: FC<SVGProps<SVGSVGElement>> = ({
  color = 'currentColor',
  ...props
}) => {
  const id = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" {...props}><circle cx={12} cy={12} r={9} stroke={color} strokeWidth={2} /><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18m-9-9a13 13 0 0 0 0 18 13 13 0 0 0 0-18" /></svg>;
};