import classNames from 'classnames/bind';

import type { GradientPanelOwnProps } from '../gradient-panel';

import styles from './gradient-panel.module.scss';

const cn = classNames.bind(styles);

type Props = Pick<GradientPanelOwnProps, 'className'>;

export const getClasses = ({ className }: Props) => {
  const cnRoot = cn('gradient-panel', className);

  return {
    cnRoot,
  };
};
