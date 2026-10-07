import classNames from 'classnames/bind';

import classes from './footer.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('footer');

  const cnDivider = cn('footer__divider');

  return {
    cnRoot,
    cnDivider,
  };
};
