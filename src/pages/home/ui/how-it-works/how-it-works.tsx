import { useTranslations } from 'next-intl';

import { SectionHeading } from '@shared/ui/section-heading';

import { getClasses } from './styles/get-classes';

const STEP_KEYS = ['define', 'roles', 'team', 'ship'] as const;

export const HowItWorks = () => {
  const t = useTranslations('home-landing');
  const { cnHowItWorks, cnSteps, cnStep, cnNumber, cnContent, cnTitle, cnDescription } = getClasses();

  return (
    <section className={cnHowItWorks}>
      <SectionHeading tag={t('howItWorks.tag')} align="left">
        {t.rich('howItWorks.title', { br: () => <br /> })}
      </SectionHeading>

      <ol className={cnSteps}>
        {STEP_KEYS.map((key, index) => (
          <li key={key} className={cnStep}>
            <span className={cnNumber}>{index + 1}</span>

            <div className={cnContent}>
              <h3 className={cnTitle}>{t(`howItWorks.steps.${key}.title`)}</h3>
              <p className={cnDescription}>{t(`howItWorks.steps.${key}.description`)}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
