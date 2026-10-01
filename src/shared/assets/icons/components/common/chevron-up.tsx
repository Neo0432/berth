import { type FC, type SVGProps, useId } from 'react';
export const SvgChevronUp: FC<SVGProps<SVGSVGElement>> = ({
  color = 'currentColor',
  ...props
}) => {
  const id = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" {...props}><path fill={color} d="M12.375 9.088a.9.9 0 0 1 .325.212l4.6 4.6a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275L12 11.4l-3.9 3.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.424.275-.7l4.6-4.6q.15-.15.325-.212.175-.063.375-.063t.375.063" /></svg>;
};