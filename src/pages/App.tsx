/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Header } from '../components/Header';
import { HomePage } from './HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import AskPage from './AskPage';
import SignInPage from './SignInPage';
import NotFoundPage from './NotFoundPage';
import QuestionPage from './QuestionPage';

function App() {
  return (
    <BrowserRouter>
        <div css={css`
          font-family: 'Segoe UI', 'Helvetica Neue', 'sans-serif';
          font-size: 16px;
          color: #5c5a5a;
        `}>
          <Header></Header>
          <Routes>
            <Route path="" element={<HomePage />}/>
            <Route path="search" element={<SearchPage />}/>
            <Route path="ask" element={<AskPage />}/>
            <Route path="questions/:questionId" element={<QuestionPage/>}/>
            <Route path="signin" element={<SignInPage />}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
