'use client';
import { type FC, type SVGProps, useId } from 'react';
export const SvgArrowRight: FC<SVGProps<SVGSVGElement>> = ({
  color = 'currentColor',
  ...props
}) => {
  const id = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 20 20" {...props}><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" /></svg>;
};