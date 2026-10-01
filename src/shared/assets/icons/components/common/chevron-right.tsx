import { type FC, type SVGProps, useId } from 'react';
export const SvgChevronRight: FC<SVGProps<SVGSVGElement>> = ({
  color = 'currentColor',
  ...props
}) => {
  const id = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 16 16" {...props}><path fill={color} d="M8.4 8 5.8 5.4a.63.63 0 0 1-.183-.467q0-.282.183-.466a.63.63 0 0 1 .467-.184q.283 0 .466.184L9.8 7.533a.6.6 0 0 1 .142.217.7.7 0 0 1 .041.25.7.7 0 0 1-.041.25.6.6 0 0 1-.142.217l-3.067 3.066a.63.63 0 0 1-.466.184.63.63 0 0 1-.467-.184.63.63 0 0 1-.183-.466q0-.285.183-.467z" /></svg>;
};