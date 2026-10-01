import { Faq } from './faq/faq';
import { Features } from './features/features';
import { FinalCta } from './final-cta/final-cta';
import { Hero } from './hero/hero';
import { HowItWorks } from './how-it-works/how-it-works';
import { KeyBenefit } from './key-benefit/key-benefit';
import { Problem } from './problem/problem';
import { Showcases } from './showcases/showcases';
import { Stats } from './stats/stats';
import { getClasses } from './styles/get-classes';

export const HomePage = () => {
  const { cnRoot } = getClasses();

  return (
    <div className={cnRoot}>
      <Hero />
      <Stats />
      <Problem />
      <HowItWorks />
      <Features />
      <KeyBenefit />
      <Showcases />
      <Faq />
      <FinalCta />
    </div>
  );
};
