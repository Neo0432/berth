import { getClasses } from './styles/get-classes';
import { FooterLegal } from './ui/footer-legal/footer-legal';
import { FooterLinks } from './ui/footer-links/footer-links';

export const Footer = () => {
  const { cnRoot, cnDivider } = getClasses();

  return (
    <footer className={cnRoot}>
      <FooterLinks />
      <span className={cnDivider} />
      <FooterLegal />
    </footer>
  );
};
