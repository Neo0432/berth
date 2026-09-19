import classNames from 'classnames/bind';

import styles from './home-page.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnRoot = cn('home');

  const cnTitle = cn('home__title');

  const cnTagline = cn('home__tagline');

  const cnActions = cn('home__actions');

  return {
    cnRoot,
    cnTitle,
    cnTagline,
    cnActions,
  };
};
