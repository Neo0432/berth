import classNames from 'classnames/bind';

import styles from './final-cta.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnFinalCta = cn('final-cta');

  const cnPanel = cn('final-cta__panel');

  const cnContent = cn('final-cta__content');

  const cnHeading = cn('final-cta__heading');

  const cnTitle = cn('final-cta__title');

  const cnSubtitle = cn('final-cta__subtitle');

  const cnBrowse = cn('final-cta__browse-button');

  const cnImage = cn('final-cta__image');

  return {
    cnFinalCta,
    cnPanel,
    cnContent,
    cnHeading,
    cnTitle,
    cnSubtitle,
    cnImage,
    cnBrowse,
  };
};
