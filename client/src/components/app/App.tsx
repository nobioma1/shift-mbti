import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from '../../routes/AppRoute';
import AppLayout from '../layout/AppLayout';
import { GlobalStyle } from '../styled/GlobalStyle';
import { QuestionsContextProvider } from '../../contexts/QuestionsContext';

const App = () => {
  return (
    <QuestionsContextProvider>
      <GlobalStyle />
      <AppLayout>
        <Router>
          <AppRoute />
        </Router>
      </AppLayout>
    </QuestionsContextProvider>
  );
};

export default App;
