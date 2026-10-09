import { useTranslations } from 'next-intl';

import { Accordion } from '@shared/ui/accordion';
import { SectionHeading } from '@shared/ui/section-heading';

import { getClasses } from './styles/get-classes';

const QUESTION_KEYS = ['free', 'equity', 'code', 'unfinished', 'github', 'concurrent'] as const;

export const Faq = () => {
  const t = useTranslations('home-landing');
  const { cnFaq, cnList } = getClasses();

  return (
    <section className={cnFaq}>
      <SectionHeading>{t('faq.title')}</SectionHeading>

      <ul className={cnList}>
        {QUESTION_KEYS.map((key) => (
          <li key={key}>
            <Accordion title={t(`faq.items.${key}.question`)}>{t(`faq.items.${key}.answer`)}</Accordion>
          </li>
        ))}
      </ul>
    </section>
  );
};
