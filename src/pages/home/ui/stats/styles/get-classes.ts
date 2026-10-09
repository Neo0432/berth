import classNames from 'classnames/bind';

import styles from './stats.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnStats = cn('stats');

  const cnPanel = cn('stats__panel');

  const cnHeading = cn('stats__heading');

  const cnTitle = cn('stats__title');

  const cnSubtitle = cn('stats__subtitle');

  const cnList = cn('stats__list');

  const cnItem = cn('stats__item');

  const cnValue = cn('stats__value');

  const cnLabel = cn('stats__label');

  return {
    cnStats,
    cnPanel,
    cnHeading,
    cnTitle,
    cnSubtitle,
    cnList,
    cnItem,
    cnValue,
    cnLabel,
  };
};
