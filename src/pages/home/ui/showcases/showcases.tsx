'use client';

import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';

import { showcaseQueries } from '@entities/showcase';

import { SvgChevronRight } from '@shared/assets/icons/components/common';
import { ROUTES } from '@shared/config';
import { Link } from '@shared/i18n';
import { DATE_FORMATS, formatDate } from '@shared/lib';
import { Button } from '@shared/ui/button';
import { SectionHeading } from '@shared/ui/section-heading';
import { ShowcaseCard } from '@shared/ui/showcase-card';

import { getClasses } from './styles/get-classes';

const LATEST_SHOWCASES = showcaseQueries.list({ page: 1, pageSize: 3 });

export const Showcases = () => {
  const t = useTranslations('home-landing');
  const { cnShowcases, cnHeader, cnIntro, cnSubtitle, cnViewAll, cnList } = getClasses();

  const { data } = useQuery(LATEST_SHOWCASES);

  return (
    <section className={cnShowcases}>
      <div className={cnHeader}>
        <div className={cnIntro}>
          <SectionHeading tag={t('showcases.tag')} align="left">
            {t('showcases.title')}
          </SectionHeading>
          <p className={cnSubtitle}>{t('showcases.subtitle')}</p>
        </div>

        <Button
          as={Link}
          href={ROUTES.showcases}
          variant="outline"
          size="s"
          iconAfter={<SvgChevronRight width={16} height={16} />}
          className={cnViewAll}
        >
          {t('showcases.viewAll')}
        </Button>
      </div>

      <ul className={cnList}>
        {data?.items.map((showcase) => (
          <li key={showcase.id}>
            <ShowcaseCard
              name={showcase.title}
              description={showcase.description}
              completedLabel={t('showcases.completedOn', {
                date: formatDate(showcase.closedAt, DATE_FORMATS.isoDate),
              })}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
