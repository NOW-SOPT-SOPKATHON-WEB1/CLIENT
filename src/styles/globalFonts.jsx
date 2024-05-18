import { Global, css } from '@emotion/react';
import oneMobile from './fonts/ONEMobileTitle.ttf';

const baseStyle = css`
  @font-face {
    font-family: 'ONE Mobile';
    src: ${oneMobile};
  }
`;

const GlobalFonts = () => <Global styles={baseStyle} />;

export default GlobalFonts;
