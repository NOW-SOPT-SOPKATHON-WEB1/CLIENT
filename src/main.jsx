// 필요한 라이브러리와 스타일을 임포트합니다.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './styles/globalStyle.jsx';

// 루트 요소에 대한 참조를 가져옵니다.
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('루트 요소를 찾는 데 실패했습니다');

// 루트 컨테이너를 생성하고 엄격 모드에서 <App /> 컴포넌트를 렌더링합니다.
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
