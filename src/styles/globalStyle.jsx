import { Global, css } from '@emotion/react';

const baseStyle = css`
  /* 전체 배경 색상 설정 */
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html {
    line-height: 1;
    font-size: 62.5%;
    background-color: #e0e0e0;
  }
  body {
    width: 375px; /* 모바일 가로 사이즈 375 고정 */
    height: 667px;
    min-height: 667px;
    max-height: 667px;
    margin: 0 auto; /* 중앙 정렬 */
    overflow-x: hidden; /* 가로 스크롤 방지 */
    background-color: #fff; /* body 영역을 하얀색으로 설정 */
  }
`;
/* body 영역 설정 */

const GlobalStyle = () => <Global styles={baseStyle} />;

export default GlobalStyle;
