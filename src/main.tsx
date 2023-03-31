import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.less';
console.log(1)
ReactDOM.createRoot(
  (() => {
    const app = document.createElement('div');
    document.body.append(app);
    return app;
  })(),
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
