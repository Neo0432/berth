import classNames from 'classnames/bind';

import styles from './home-page.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnRoot = cn('home');

  return {
    cnRoot,
  };
};
