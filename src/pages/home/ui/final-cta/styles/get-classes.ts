import classNames from 'classnames/bind';

import styles from './final-cta.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnFinalCta = cn('final-cta');

  const cnPanel = cn('final-cta__panel');

  const cnHeading = cn('final-cta__heading');

  const cnTitle = cn('final-cta__title');

  const cnSubtitle = cn('final-cta__subtitle');

  const cnActions = cn('final-cta__actions');

  const cnBrowse = cn('final-cta__browse');

  return {
    cnFinalCta,
    cnPanel,
    cnHeading,
    cnTitle,
    cnSubtitle,
    cnActions,
    cnBrowse,
  };
};
