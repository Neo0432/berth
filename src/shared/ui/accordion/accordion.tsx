'use client';

import { type ComponentPropsWithoutRef, type FC, type ReactNode, useId, useState } from 'react';

import { SvgChevronUp } from '@shared/assets/icons/components/common';

import { getClasses } from './styles/get-classes';

type RootComponentProps = Omit<ComponentPropsWithoutRef<'div'>, 'title'>;

export interface AccordionProps extends RootComponentProps {
  title: ReactNode;
  isDefaultOpen?: boolean;
  className?: string;
  children: ReactNode;
}

export const Accordion: FC<AccordionProps> = ({ title, isDefaultOpen = false, className, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  const id = useId();

  const triggerId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  const { cnRoot, cnTrigger, cnIcon, cnPanel, cnPanelInner, cnContent } = getClasses({
    className,
    isOpen,
  });

  return (
    <div className={cnRoot} {...props}>
      <h3>
        <button
          id={triggerId}
          type="button"
          className={cnTrigger}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((wasOpen) => !wasOpen)}
        >
          {title}
          <SvgChevronUp className={cnIcon} aria-hidden />
        </button>
      </h3>

      <div id={panelId} role="region" aria-labelledby={triggerId} className={cnPanel}>
        <div className={cnPanelInner}>
          <div className={cnContent}>{children}</div>
        </div>
      </div>
    </div>
  );
};
