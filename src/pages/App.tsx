/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Header } from '../components/Header';
import { HomePage } from './HomePage';
import { fontFamily, fontSize, gray2 } from '../css/Styles';

function App() {
  return (
    <div css={css`
      font-family: 'Segoe UI', 'Helvetica Neue', 'sans-serif';
      font-size: 16px;
      color: #5c5a5a;
    `}>
      <Header></Header>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
