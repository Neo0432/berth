import classNames from 'classnames/bind';

import styles from './header.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnRoot = cn('header');

  const cnContent = cn('header__content');

  return {
    cnRoot,
    cnContent,
  };
};
