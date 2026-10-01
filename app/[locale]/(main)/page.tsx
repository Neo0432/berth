import type { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import { HomePage } from '@pages/home';

interface HomeRouteProps {
  params: Promise<{ locale: string }>;
}

const HomeRoute = async ({ params }: HomeRouteProps) => {
  const { locale } = await params;

  // The cast is safe: [locale]/layout.tsx rejects unknown locales with notFound()
  // before this page can render. Pages render alongside the layout rather than
  // inside it, so TypeScript cannot see that narrowing from here.
  setRequestLocale(locale as Locale);

  return <HomePage />;
};

export default HomeRoute;
