'use client';

import { type FC, useTransition } from 'react';
import { type Locale, useLocale, useTranslations } from 'next-intl';
import type { SingleValue } from 'react-select';

import { SvgGlobe } from '@shared/assets/icons/components/common';
import { routing, usePathname, useRouter } from '@shared/i18n';
import type { SelectOption } from '@shared/types';
import { Select } from '@shared/ui/select';

import { LOCALE_NAMES } from './lib/constants';
import { CUSTOM_STYLES } from './styles/custom-styles';
import { getClasses } from './styles/get-classes';

const LOCALE_OPTIONS: SelectOption<Locale>[] = routing.locales.map((locale) => ({
  label: LOCALE_NAMES[locale],
  value: locale,
}));

export interface LocaleSwitcherProps {
  className?: string;
}

export const LocaleSwitcher: FC<LocaleSwitcherProps> = ({ className }) => {
  const t = useTranslations('common.localeSwitcher');
  const locale = useLocale();
  const pathname = usePathname();
  const lnRouter = useRouter();
  const [isPending, startTransition] = useTransition();

  const { cnRoot, cnValue, cnIcon } = getClasses({ className });

  const currentOption = LOCALE_OPTIONS[routing.locales.indexOf(locale)];

  const handleChange = (option: SingleValue<SelectOption<Locale>>) => {
    if (!option || option === currentOption) {
      return;
    }

    startTransition(() => {
      lnRouter.replace(`${pathname}${window.location.search}`, { locale: option.value });
    });
  };

  return (
    <Select
      className={cnRoot}
      aria-label={t('label')}
      options={LOCALE_OPTIONS}
      value={currentOption}
      onChange={handleChange}
      isLoading={isPending}
      styles={CUSTOM_STYLES}
      formatOptionLabel={(option, { context }) =>
        context === 'value' ? (
          <span className={cnValue}>
            <SvgGlobe className={cnIcon} aria-hidden />
            {option.label}
          </span>
        ) : (
          option.label
        )
      }
    />
  );
};
