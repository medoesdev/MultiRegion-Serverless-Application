export const environment = {

  production: true,

  // TODO: make sure you have the correct region
  region: 'eu-west-1',


  // TODO: This id can be retrieved in output section of the cognito ui
  // cloud formation stack.
  cognitoIdentityPoolId: 'eu-west-1:2ecf0f8a-932b-47c6-91cf-2003c9f45f8e',

  // TODO: Facebook app id can be retrieved from the application in your
  // facebook developer account.
  facebookAppId: '2565202357115339',

  // TODO: The API URL is available in the API Gateway console under Stage
  // NOTE: don't forget trailing "/"  For example:
  // https://api.example.com/prod/
  ticketAPI: 'https://dsyy28yf9e.execute-api.eu-west-1.amazonaws.com/prod/'

};
