import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './tailwind.css'; // Tailwind styles should be imported after your custom styles
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-tluymqal41yyam5c.us.auth0.com"         // Replace with your Auth0 domain
    clientId="B118Yt0UiYyX2XIRu9Hryeug4JMXkhHG"    // Replace with your Auth0 client ID
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
