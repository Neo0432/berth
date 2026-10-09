'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { SectionHeading } from '@shared/ui/section-heading';
import { TableDefault } from '@shared/ui/table-default';

import { KEY_BENEFIT_CELL_WIDTHS, keyBenefitColumnHelper, type KeyBenefitRow } from './lib/constants';
import { getClasses } from './styles/get-classes';

export const KeyBenefit = () => {
  const t = useTranslations('home-landing');
  const { cnKeyBenefit, cnIntro, cnSubtitle, cnTable } = getClasses();

  const columns = useMemo(
    () =>
      keyBenefitColumnHelper.columns([
        keyBenefitColumnHelper.accessor('author', { header: t('keyBenefit.table.author') }),
        keyBenefitColumnHelper.accessor('member', { header: t('keyBenefit.table.member') }),
      ]),
    [t],
  );

  const data = useMemo<KeyBenefitRow[]>(
    () => [
      {
        author: t('keyBenefit.table.rows.roles.author'),
        member: t('keyBenefit.table.rows.roles.member'),
      },
      {
        author: t('keyBenefit.table.rows.team.author'),
        member: t('keyBenefit.table.rows.team.member'),
      },
      {
        author: t('keyBenefit.table.rows.scope.author'),
        member: t('keyBenefit.table.rows.scope.member'),
      },
      {
        author: t('keyBenefit.table.rows.result.author'),
        member: t('keyBenefit.table.rows.result.member'),
      },
    ],
    [t],
  );

  return (
    <section className={cnKeyBenefit}>
      <div className={cnIntro}>
        <SectionHeading tag={t('keyBenefit.tag')}>{t.rich('keyBenefit.title', { br: () => <br /> })}</SectionHeading>
        <p className={cnSubtitle}>{t('keyBenefit.subtitle')}</p>
      </div>

      <TableDefault
        className={cnTable}
        cellWidths={KEY_BENEFIT_CELL_WIDTHS}
        columns={columns}
        data={data}
        components={{
          Header: <TableDefault.Header />,
          Body: <TableDefault.Body />,
        }}
      />
    </section>
  );
};
