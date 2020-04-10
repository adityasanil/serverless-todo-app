// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '8xb5xw4xga'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'sanil-todo.auth0.com', // Auth0 domain
  clientId: 'dJeb9AX5DvlQXeeWc0xAOlEjVkqBwmw6', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
