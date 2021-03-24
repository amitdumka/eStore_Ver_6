const CLIENT_ID = process.env.CLIENT_ID || '0oacfqtylAFNYrEex5d6';
const ISSUER = process.env.ISSUER || 'https://dev-63318095.okta.com/oauth2/defaultoauth2/default';
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: 'http://estores.aprajitaretails.in/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    messagesUrl: 'http://estores.aprajitaretails.in/api/messages',
  },
};
