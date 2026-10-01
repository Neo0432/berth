import { useTranslations } from 'next-intl';

import { SvgChevronRight } from '@shared/assets/icons/components/common';
import { ROUTES } from '@shared/config';
import { Link } from '@shared/i18n';
import { Button } from '@shared/ui/button';
import { GradientPanel } from '@shared/ui/gradient-panel';

import { getClasses } from './styles/get-classes';

export const FinalCta = () => {
  const t = useTranslations('home-landing');
  const { cnFinalCta, cnPanel, cnHeading, cnTitle, cnSubtitle, cnActions, cnBrowse } = getClasses();

  return (
    <section className={cnFinalCta}>
      <GradientPanel className={cnPanel}>
        <div className={cnHeading}>
          <h2 className={cnTitle}>{t.rich('finalCta.title', { br: () => <br /> })}</h2>
          <p className={cnSubtitle}>{t('finalCta.subtitle')}</p>
        </div>

        <div className={cnActions}>
          <Button as={Link} href={ROUTES.signUp}>
            {t('finalCta.postProject')}
          </Button>

          <Button as={Link} href={ROUTES.projects} variant="text" className={cnBrowse}>
            {t('finalCta.browse')}
            <SvgChevronRight width={16} height={16} aria-hidden />
          </Button>
        </div>
      </GradientPanel>
    </section>
  );
};
