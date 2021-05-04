import { Footer_Container } from '../styles';
import { memo, useMemo } from 'react';

const Footer = memo(() => {
  const CONTENTS = useMemo(
    () => [
      {
        for: 'Mastrero',
        href: 'https://mastrero.vercel.app',
        src: 'https://img.icons8.com/wired/30/domain.png',
      },
      {
        for: 'Linkedin',
        href: 'https://www.linkedin.com/in/arunkumar-nadikattu',
        src: 'https://img.icons8.com/ios-filled/30/linkedin.png',
      },
      {
        for: 'Github',
        href: 'https://github.com/mastrero',
        src: 'https://img.icons8.com/ios-glyphs/30/github.png',
      },
    ],
    []
  );
  return (
    <Footer_Container>
      <h2>ArunKumar Nadikattu</h2>
      {CONTENTS.map(CONTENT => (
        <a href={CONTENT.href} title={CONTENT.for} key={CONTENT.for} target="_blank" rel="noopener noreferer">
          <img src={CONTENT.src} width="30px" height="30px" alt={CONTENT.for} />
        </a>
      ))}
    </Footer_Container>
  );
});

export default Footer;
