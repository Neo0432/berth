import classNames from 'classnames/bind';

import styles from './key-benefit.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnKeyBenefit = cn('key-benefit');

  const cnIntro = cn('key-benefit__intro');

  const cnSubtitle = cn('key-benefit__subtitle');

  const cnTable = cn('key-benefit__table');

  return {
    cnKeyBenefit,
    cnIntro,
    cnSubtitle,
    cnTable,
  };
};
