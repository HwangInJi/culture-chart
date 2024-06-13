import React from 'react';
import ReactDOM from 'react-dom/client'; // 변경된 부분
import App from './App';
import Footer from './Footer';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // createRoot를 사용하여 루트 생성
root.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
);
