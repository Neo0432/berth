import classNames from 'classnames/bind';

import styles from './layout-base.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnRoot = cn('root');

  return {
    cnRoot,
  };
};
