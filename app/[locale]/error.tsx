'use client';

import { useEffect } from 'react';

import { ErrorPage } from '@pages/error';

import { logger } from '@shared/lib';

interface ErrorRouteProps {
  error: Error & { digest?: string };
}

const ErrorRoute = ({ error }: ErrorRouteProps) => {
  useEffect(() => {
    // Reporting to the monitoring service hooks in here (NFR-6).
    logger.error(error);
  }, [error]);

  return <ErrorPage />;
};

export default ErrorRoute;
