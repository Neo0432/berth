import { useTranslations } from 'next-intl';

import { GradientPanel } from '@shared/ui/gradient-panel';

import { getClasses } from './styles/get-classes';

const STAT_KEYS = ['openRoles', 'projectsRecruiting', 'cyclesShipped'] as const;

export const Stats = () => {
  const t = useTranslations('home-landing');
  const { cnStats, cnPanel, cnHeading, cnTitle, cnSubtitle, cnList, cnItem, cnValue, cnLabel } = getClasses();

  return (
    <section className={cnStats}>
      <GradientPanel className={cnPanel}>
        <div className={cnHeading}>
          <h2 className={cnTitle}>{t('stats.title')}</h2>
          <p className={cnSubtitle}>{t('stats.subtitle')}</p>
        </div>

        <ul className={cnList}>
          {STAT_KEYS.map((key) => (
            <li key={key} className={cnItem}>
              <div className={cnValue} />
              <span className={cnLabel}>{t(`stats.items.${key}`)}</span>
            </li>
          ))}
        </ul>
      </GradientPanel>
    </section>
  );
};
