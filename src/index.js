import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from '@auth0/auth0-react';
import App from './App';


//dev-mw3e6hww.us.auth0.com
//xk1JO7Px3f3d3mM26udm28x6dryPhTi2

ReactDOM.render(
  <Auth0Provider
  domain="dev-mw3e6hww.us.auth0.com"
  clientId="xk1JO7Px3f3d3mM26udm28x6dryPhTi2"
  redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>,
  document.getElementById('root')
);


