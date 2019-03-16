const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const salt = 11;
const tokenkey = 'secretsauce';

const hash = async (password) => {
  const digest = await bcrypt.hash(password, salt);
  return digest;
}

const genToken = (data) => {
  const token = jwt.sign(data, tokenkey);
  return token;
};

const checkPassword = async (password, password_digest) => {
  return await bcrypt.compare(password, password_digest);
}

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
