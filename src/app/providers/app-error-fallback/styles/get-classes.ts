import classNames from 'classnames/bind';

import styles from './app-error-fallback.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnRoot = cn('error-fallback');

  const cnTitle = cn('error-fallback__title');

  const cnDescription = cn('error-fallback__description');

  return {
    cnRoot,
    cnTitle,
    cnDescription,
  };
};
