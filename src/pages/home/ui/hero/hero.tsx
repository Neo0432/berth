import { useTranslations } from 'next-intl';
import { getClasses } from './styles/get-classes';
import Image from 'next/image';

import heroImage from './media/hero-image.webp';

const HERO_IMAGE_ALT = 'Graph illustrating the cycle process and the benefits of our service';

export const Hero = () => {
  const t = useTranslations('home-landing');
  const { cnHero, cnTextArea, cnTitle, cnHighlited, cnSubtitle, cnImage } = getClasses();

  return (
    <section className={cnHero}>
      <div className={cnTextArea}>
        <h1 className={cnTitle}>
          {t('pageTitle.text')} <span className={cnHighlited}>{t('pageTitle.highlited')}</span>
        </h1>
        <p className={cnSubtitle}>{t.rich('pageTitle.subtitle', { br: () => <br /> })}</p>
      </div>

      <Image
        className={cnImage}
        width={510}
        height={332}
        src={heroImage.src}
        fetchPriority="high"
        loading="eager"
        alt={HERO_IMAGE_ALT}
        objectFit="cover"
      />
    </section>
  );
};
