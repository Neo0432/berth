import classNames from 'classnames/bind';

import styles from './error-page.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnRoot = cn('error-page');

  const cnTitle = cn('error-page__title');

  const cnDescription = cn('error-page__description');

  return {
    cnRoot,
    cnTitle,
    cnDescription,
  };
};
