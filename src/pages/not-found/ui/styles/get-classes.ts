import classNames from 'classnames/bind';

import styles from './not-found-page.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnRoot = cn('not-found');

  const cnTitle = cn('not-found__title');

  const cnDescription = cn('not-found__description');

  return {
    cnRoot,
    cnTitle,
    cnDescription,
  };
};
