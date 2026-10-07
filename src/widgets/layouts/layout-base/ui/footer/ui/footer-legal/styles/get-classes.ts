import classNames from 'classnames/bind';

import classes from './footer-legal.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('footer-legal');

  const cnInfo = cn('footer-legal__legal-info');

  return {
    cnRoot,
    cnInfo,
  };
};
