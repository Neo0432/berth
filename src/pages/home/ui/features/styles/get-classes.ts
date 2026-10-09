import classNames from 'classnames/bind';

import styles from './features.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnFeatures = cn('features');

  const cnCards = cn('features__cards');

  const cnCardScope = cn('features__card', 'features__card--scope');

  const cnCardRoles = cn('features__card', 'features__card--roles');

  const cnCardDeadline = cn('features__card', 'features__card--deadline');

  const cnCardTitle = cn('features__card-title');

  const cnCardDescription = cn('features__card-description');

  return {
    cnFeatures,
    cnCards,
    cnCardScope,
    cnCardRoles,
    cnCardDeadline,
    cnCardTitle,
    cnCardDescription,
  };
};
