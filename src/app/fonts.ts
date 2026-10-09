import localFont from 'next/font/local';

/**
 * next/font self-hosts the files, generates a metric-matched fallback so the
 * swap does not shift the layout, and exposes the family via --font-montserrat.
 *
 * The paths are repeated on purpose: next/font reads this call statically at
 * build time and rejects anything that is not a written-out literal.
 */
export const montserrat = localFont({
  variable: '--font-montserrat',
  display: 'swap',
  src: [
    { path: '../shared/assets/fonts/montserrat/Montserrat-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../shared/assets/fonts/montserrat/Montserrat-ExtraLight.woff2', weight: '200', style: 'normal' },
    { path: '../shared/assets/fonts/montserrat/Montserrat-Light.woff2', weight: '300', style: 'normal' },
    { path: '../shared/assets/fonts/montserrat/Montserrat-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../shared/assets/fonts/montserrat/Montserrat-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../shared/assets/fonts/montserrat/Montserrat-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../shared/assets/fonts/montserrat/Montserrat-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../shared/assets/fonts/montserrat/Montserrat-ExtraBold.woff2', weight: '800', style: 'normal' },
    { path: '../shared/assets/fonts/montserrat/Montserrat-Black.woff2', weight: '900', style: 'normal' },
  ],
});
