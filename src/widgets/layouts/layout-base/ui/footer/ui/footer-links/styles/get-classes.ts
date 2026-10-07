import classNames from 'classnames/bind';

import classes from './footer-links.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('footer-links');

  const cnLogoBlock = cn('footer-links__logo-block');

  const cnGroups = cn('footer-links__groups');

  return {
    cnRoot,
    cnLogoBlock,
    cnGroups,
  };
};
