const contentful = require("contentful");

export const client = contentful.createClient({
  space: "toa9k0duo87q",
  environment: "master", // defaults to 'master' if not set
  accessToken: "R7Rza_F4HRv5a5BEiN3pJmvnX_b9lMeVD5-20SOOzdk",
});

client
  .getEntry("2pTFJ4gbM7j77lknHizYDH")
  .then((entry) => console.log(entry))
  .catch(console.error);
