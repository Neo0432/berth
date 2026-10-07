'use client';
import { type FC, type SVGProps, useId } from 'react';
export const SvgAlertCircle: FC<SVGProps<SVGSVGElement>> = ({
  color = 'currentColor',
  ...props
}) => {
  const id = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" {...props}><circle cx={12} cy={12} r={9} stroke={color} strokeWidth={1.5} /><path stroke={color} strokeLinecap="round" strokeWidth={1.5} d="M12 7.5v5m0 4h.01" /></svg>;
};