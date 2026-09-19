import type { CSSProperties } from 'react';

import { getClasses } from './styles/get-classes';

export const SKELETON_SHAPES = ['text', 'rect', 'circle'] as const;

export type SkeletonShape = (typeof SKELETON_SHAPES)[number];

export interface SkeletonProps {
  shape?: SkeletonShape;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  className?: string;
}

export const Skeleton = ({ shape = 'text', width, height, className }: SkeletonProps) => {
  const { cnRoot } = getClasses({ className, shape });

  return <span className={cnRoot} style={{ width, height }} aria-hidden />;
};
