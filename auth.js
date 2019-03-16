const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const salt = 11;
const tokenkey = process.env.TOKENKEY;

// encrypts password on register
const hash = async (password) => {
  const digest = await bcrypt.hash(password, salt);
  return digest;
}

//generates token on login/register
const genToken = (data) => {
  const token = jwt.sign(data, tokenkey);
  return token;
};

// used on login to verify user
const checkPassword = async (password, password_digest) => {
  return await bcrypt.compare(password, password_digest);
}


// middleware used to verify user on routes
const restrict = async (req, res, next) => {
  try {
    const token = await req.headers.authorization.split(" ")[1];
    const data = await jwt.verify(token, tokenKey);
    res.locals.user = data;
    next();
  } catch (e) {
    console.log(e);
    res.status(403).send('Unauthorized');
  }
}

module.exports = {
  hash,
  checkPassword,
  genToken,
  restrict,
};
