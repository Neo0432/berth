import { notFound } from 'next/navigation';

/**
 * Unknown paths never match a route segment, so Next would fall back to its
 * built-in 404 outside our layout. Catching them here routes them into
 * [locale]/not-found.tsx, which renders with fonts, providers and translations.
 */
const CatchAllRoute = () => notFound();

export default CatchAllRoute;
