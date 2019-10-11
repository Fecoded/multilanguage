import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18next';

ReactDOM.render(
  <Suspense
    fallback={
      <div className="container progress blue lighten-3">
        <div className="indeterminate blue"></div>
      </div>
    }
  >
    <App />
  </Suspense>,
  document.getElementById('root')
);
