import classNames from 'classnames/bind';

import type { FieldControlProps } from '../field-control';

import styles from './field-control.module.scss';

const cn = classNames.bind(styles);

type Props = Pick<FieldControlProps, 'className' | 'isDisabled'>;

export const getClasses = ({ className, isDisabled }: Props) => {
  const cnRoot = cn('field-control', className);

  const cnLabel = cn('field-control__label', { 'field-control__label--disabled': isDisabled });

  const cnRequired = cn('field-control__required');

  const cnNotify = cn('field-control__notify');

  const cnNotifyBefore = cn('field-control__notify-before');

  const cnNotifyAfter = cn('field-control__notify-after');

  const cnError = cn('field-control__error');

  const cnErrorIcon = cn('field-control__error-icon');

  return {
    cnRoot,
    cnLabel,
    cnRequired,
    cnNotify,
    cnNotifyBefore,
    cnNotifyAfter,
    cnError,
    cnErrorIcon,
  };
};
