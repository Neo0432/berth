import type { FC, ReactNode } from 'react';

import { SvgAlertCircle } from '@shared/assets/icons/components/common';

import { getClasses } from './styles/get-classes';

export const getFieldErrorId = (fieldId: string) => `${fieldId}-error`;

export interface FieldControlProps {
  className?: string;
  htmlFor?: string;
  label?: ReactNode;
  isRequired?: boolean;
  isDisabled?: boolean;
  notifyBefore?: ReactNode;
  notifyAfter?: ReactNode;
  errorText?: string;
  showErrorText?: boolean;
  children: ReactNode;
}

export const FieldControl: FC<FieldControlProps> = ({
  className,
  htmlFor,
  label,
  isRequired = false,
  isDisabled = false,
  notifyBefore,
  notifyAfter,
  errorText,
  showErrorText = true,
  children,
}) => {
  const { cnRoot, cnLabel, cnRequired, cnNotify, cnNotifyBefore, cnNotifyAfter, cnError, cnErrorIcon } = getClasses({
    className,
    isDisabled,
  });

  const isErrorShown = showErrorText && Boolean(errorText);

  return (
    <div className={cnRoot}>
      {label && (
        <label className={cnLabel} htmlFor={htmlFor}>
          {label}
          {isRequired && (
            <span className={cnRequired} aria-hidden>
              *
            </span>
          )}
        </label>
      )}

      {children}

      <div className={cnNotify}>
        <div className={cnNotifyBefore} aria-live="polite">
          {isErrorShown ? (
            <p className={cnError} id={htmlFor ? getFieldErrorId(htmlFor) : undefined}>
              <SvgAlertCircle className={cnErrorIcon} aria-hidden />
              {errorText}
            </p>
          ) : (
            notifyBefore
          )}
        </div>

        {notifyAfter && <span className={cnNotifyAfter}>{notifyAfter}</span>}
      </div>
    </div>
  );
};
