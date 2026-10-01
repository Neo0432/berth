import classNames from 'classnames/bind';

import styles from './hero.module.scss';

const cn = classNames.bind(styles);

export const getClasses = () => {
  const cnHero = cn('hero');

  const cnTextArea = cn('hero__text-area');

  const cnTitle = cn('hero__title');

  const cnHighlited = cn('hero__title-highlited');

  const cnSubtitle = cn('hero__subtitle');

  const cnImage = cn('hero__image');

  return {
    cnHero,
    cnTextArea,
    cnTitle,
    cnHighlited,
    cnSubtitle,
    cnImage,
  };
};
