import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PostHogProvider } from 'posthog-js/react';

const options = {
  api_host: process.env.REACT_APP_POSTHOG_HOST, // For CRA, use process.env.REACT_APP_*
  // Add any other options you need
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostHogProvider apiKey={process.env.REACT_APP_POSTHOG_KEY!} options={options}>
      <App />
    </PostHogProvider>
  </React.StrictMode>
);
