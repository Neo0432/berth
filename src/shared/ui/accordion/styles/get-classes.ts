import classNames from 'classnames/bind';

import type { AccordionProps } from '../accordion';

import styles from './accordion.module.scss';

const cn = classNames.bind(styles);

type Props = Pick<AccordionProps, 'className'> & {
  isOpen: boolean;
};

export const getClasses = ({ className, isOpen }: Props) => {
  const cnRoot = cn('accordion', { 'accordion--open': isOpen }, className);

  const cnTrigger = cn('accordion__trigger');

  const cnIcon = cn('accordion__icon');

  const cnPanel = cn('accordion__panel');

  const cnPanelInner = cn('accordion__panel-inner');

  const cnContent = cn('accordion__content');

  return {
    cnRoot,
    cnTrigger,
    cnIcon,
    cnPanel,
    cnPanelInner,
    cnContent,
  };
};
