const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

module.exports = {
    env: {
        giphy_key: process.env.GIPHY_KEY
    }
};
// console.log(module.exports);
