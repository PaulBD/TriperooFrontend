let url = "http://localhost:5000/api/v1";

if (process.env.NODE_ENV === 'production') {
  url = "http://www.triperoo.co.uk/api/v1";
}

export default url;
