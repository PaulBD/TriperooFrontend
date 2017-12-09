import environment from './environment';

let url = "http://127.0.0.1:8080/api/v1";

if (environment == 'Live') {
  url = "/api/v1";
}

export default url;
