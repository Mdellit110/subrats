const { Router } = require('express');
const { User } = require('..models');
const {
  hash,
  checkPassword,
  genToken,
  restrict
} = require('../auth');

const usersRouter = Router();

usersRouter.get('/verify', restrict, async (req, res) => {
  res.json({user: res.locals.user});
});

usersRouter.post('/', async (req, res, next) => {
  try {
    const {
      username,
      email,
      password
    } = req.body
    const pw_digest = await hash(password);

    const user = await User.create({
      username,
      email,
      password_digest: pw_digest
  });
    const {
    password_digest
    ...userData
    } = user.dataValues

    const token = await genToken(userData);
    console.log(token);

    res.json({
      token,
      userData
    });
  } catch(err) {
    next(err);
  }
});

usersRouter.post('/login', async (req, res, next) => {
  try {
    const {
      email,
      password
    } = req.body;

 const digest = await hash(password);

 const user = await User.findOne({
   where: {
     email
   }
 });

const isPassValid = await checkPassword(password, user.password_digest);
if (isPassValid) {
  const {
    password_digest,
    ...userData,
  } = user.dataValues;
  const token = await genToken(userData);

  res.json({
    token,
    userData
  });
 }
} catch(e) {
  res.status(401).send('Invalid credentials');
  }
});
module.exports = usersRouter;
