'use client';

import { type ReactNode, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: ReactNode;
  /** Container id. If it is missing from the DOM it will be created. */
  containerId?: string;
}

/** The container never changes — there is nothing to subscribe to. */
const noop = () => undefined;
const emptySubscribe = () => noop;

const getContainer = (containerId: string) => {
  const existing = document.getElementById(containerId);

  if (existing) {
    return existing;
  }

  const created = document.createElement('div');

  created.id = containerId;
  document.body.append(created);

  return created;
};

export const Portal = ({ children, containerId = 'portal-root' }: PortalProps) => {
  // Skip the portal on the server and on the first (hydration) render.
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!isClient) {
    return null;
  }

  return createPortal(children, getContainer(containerId));
};
