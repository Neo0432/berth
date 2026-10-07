import { useTranslations } from 'next-intl';

import { SvgArrowRight } from '@shared/assets/icons/components/common';
import { SvgReviewerBackend } from '@shared/assets/icons/components/complex';
import { ROUTES } from '@shared/config';
import { Link } from '@shared/i18n';
import { Button } from '@shared/ui/button';
import { GradientPanel } from '@shared/ui/gradient-panel';

import { getClasses } from './styles/get-classes';

export const FinalCta = () => {
  const t = useTranslations('home-landing');
  const { cnFinalCta, cnPanel, cnContent, cnHeading, cnTitle, cnSubtitle, cnImage, cnBrowse } = getClasses();

  return (
    <section className={cnFinalCta}>
      <GradientPanel className={cnPanel}>
        <div className={cnContent}>
          <div className={cnHeading}>
            <h2 className={cnTitle}>{t.rich('finalCta.title', { br: () => <br /> })}</h2>
            <p className={cnSubtitle}>{t('finalCta.subtitle')}</p>
          </div>

          <Button as={Link} href={ROUTES.projects} variant="on-color" className={cnBrowse}>
            {t('finalCta.goProjects')}
            <SvgArrowRight width={20} height={20} aria-hidden />
          </Button>
        </div>

        <div className={cnImage}>
          <SvgReviewerBackend width={240} height={240} />
        </div>
      </GradientPanel>
    </section>
  );
};
