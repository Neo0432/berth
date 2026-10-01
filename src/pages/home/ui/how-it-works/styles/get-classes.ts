import classNames from 'classnames/bind';

import styles from './how-it-works.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnHowItWorks = cn('how-it-works');

  const cnSteps = cn('how-it-works__steps');

  const cnStep = cn('how-it-works__step');

  const cnNumber = cn('how-it-works__number');

  const cnContent = cn('how-it-works__content');

  const cnTitle = cn('how-it-works__title');

  const cnDescription = cn('how-it-works__description');

  return {
    cnHowItWorks,
    cnSteps,
    cnStep,
    cnNumber,
    cnContent,
    cnTitle,
    cnDescription,
  };
};
