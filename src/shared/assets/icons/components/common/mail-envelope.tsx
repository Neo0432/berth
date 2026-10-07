'use client';
import { type FC, type SVGProps, useId } from 'react';
export const SvgMailEnvelope: FC<SVGProps<SVGSVGElement>> = ({
  color = 'currentColor',
  ...props
}) => {
  const id = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 16 16" {...props}><path stroke="#BBB" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.333 2.667H2.666c-.736 0-1.333.597-1.333 1.333v8c0 .736.597 1.333 1.333 1.333h10.667c.736 0 1.333-.597 1.333-1.333V4c0-.736-.597-1.333-1.333-1.333" /><path stroke="#BBB" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m14.666 4.667-5.98 3.8a1.29 1.29 0 0 1-1.373 0l-5.98-3.8" /></svg>;
};