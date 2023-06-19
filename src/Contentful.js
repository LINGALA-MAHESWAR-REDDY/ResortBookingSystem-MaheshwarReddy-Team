
import * as contentful from 'contentful';

// const contentful = require("contentful");

// export default contentful.createClient({
//   space: process.env.REACT_APP_API_SPACE,
//   accessToken: process.env.REACT_APP_ACCESS_TOKEN
// });

const client = contentful.createClient({
  space: 'YOUR_SPACE_ID',
  accessToken: 'YOUR_ACCESS_TOKEN',
});

