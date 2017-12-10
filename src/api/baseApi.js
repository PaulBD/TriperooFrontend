let url = "http://127.0.0.1:8080/api/v1";

if (process.env.NODE_ENV === 'production') {
  url = "http://www.triperoo.co.uk/api/v1";
}

export default url;
