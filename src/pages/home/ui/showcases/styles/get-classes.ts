import classNames from 'classnames/bind';

import styles from './showcases.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnShowcases = cn('showcases');

  const cnHeader = cn('showcases__header');

  const cnIntro = cn('showcases__intro');

  const cnSubtitle = cn('showcases__subtitle');

  const cnViewAll = cn('showcases__view-all');

  const cnList = cn('showcases__list');

  return {
    cnShowcases,
    cnHeader,
    cnIntro,
    cnSubtitle,
    cnViewAll,
    cnList,
  };
};
