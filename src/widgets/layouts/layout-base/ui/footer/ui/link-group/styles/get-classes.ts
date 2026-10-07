import classNames from 'classnames/bind';

import classes from './link-group.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('link-group');

  const cnTitle = cn('link-group__title');

  const cnLinks = cn('link-group__links');

  const cnLink = cn('link-group__link');

  return {
    cnRoot,
    cnTitle,
    cnLinks,
    cnLink,
  };
};
