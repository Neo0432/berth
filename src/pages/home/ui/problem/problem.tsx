import { useTranslations } from 'next-intl';

import { SectionHeading } from '@shared/ui/section-heading';

import { REVIEWERS } from './lib/constants';
import { getClasses } from './styles/get-classes';

export const Problem = () => {
  const t = useTranslations('home-landing');
  const { cnProblem, cnReviewers, cnReviewer, cnQuote, cnSummary } = getClasses();

  return (
    <section className={cnProblem}>
      <SectionHeading tag={t('problem.tag')}>{t.rich('problem.title', { br: () => <br /> })}</SectionHeading>

      <ul className={cnReviewers}>
        {REVIEWERS.map(({ quoteKey, icon }) => (
          <li key={quoteKey} className={cnReviewer}>
            {icon}
            <blockquote className={cnQuote}>{t(`problem.quotes.${quoteKey}`)}</blockquote>
          </li>
        ))}
      </ul>

      <p className={cnSummary}>{t('problem.summary')}</p>
    </section>
  );
};
