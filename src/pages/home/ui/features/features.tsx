'use client';

import { useTranslations } from 'next-intl';

import { BREAKPOINTS } from '@shared/assets/styles/mixins/breakpoints';
import { useMediaQueryLineBreak } from '@shared/helpers/use-media-query-line-break';
import { SectionHeading } from '@shared/ui/section-heading';

import { getClasses } from './styles/get-classes';

export const Features = () => {
  const t = useTranslations('home-landing');
  const { cnFeatures, cnCards, cnCardScope, cnCardRoles, cnCardDeadline, cnCardTitle, cnCardDescription } =
    getClasses();

  const cardTitleBreak = useMediaQueryLineBreak(BREAKPOINTS['max-laptop-s']);

  return (
    <section className={cnFeatures}>
      <SectionHeading tag={t('features.tag')}>{t.rich('features.title', { br: () => <br /> })}</SectionHeading>

      <ul className={cnCards}>
        <li className={cnCardScope}>
          <h3 className={cnCardTitle}>{t.rich('features.cards.scope.title', { br: cardTitleBreak })}</h3>
          <p className={cnCardDescription}>{t('features.cards.scope.description')}</p>
        </li>

        <li className={cnCardRoles}>
          <h3 className={cnCardTitle}>{t.rich('features.cards.roles.title', { br: cardTitleBreak })}</h3>
          <p className={cnCardDescription}>{t('features.cards.roles.description')}</p>
        </li>

        <li className={cnCardDeadline}>
          <h3 className={cnCardTitle}>{t('features.cards.deadline.title')}</h3>
          <p className={cnCardDescription}>{t('features.cards.deadline.description')}</p>
        </li>
      </ul>
    </section>
  );
};
