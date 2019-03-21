const { Router } = require('express');
const { Station, Comment, User } = require('../models');
const { restrict } = require('../auth');

const stationsRouter = Router();

// gets all stations '/stations'
stationsRouter.get('/', async (req, res) => {
  try {
    const stations = await Station.findAll();
    res.json(stations)
  } catch(err) {
    console.error({error: e});
  }
});

// get a station by id '/stations/:id'
stationsRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const station = await Station.findByPk(id);
    res.json(station)
  } catch(e) {
    console.error({error: e});
  }
})

// gets all comments by station id '/stations/:id/comments'
stationsRouter.get('/:id/comments', async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Comment.findAll({
      where: {
        station_id: id
      }
    });
    res.json(comments);
  } catch(e) {
    console.error({error: e});
  }
});

// post a comment to a station
stationsRouter.post('/:id/comments/new', async (req, res) => {
  try {
      const station = await Station.findByPk(req.params.id)
      const newComment = await station.createComment(req.body);
      res.json(newComment);
    } catch (e) {
      console.error({error: e});
    }
})

stationsRouter.post('/:id/user/:user_id', async (req, res, next) => {
  try {
    const station = await Station.findByPk(req.params.id);
    const prevUsers = await station.getUsers();
    const newUser = await User.findByPk(req.params.user_id)
    await station.setUsers([...prevUsers, newUser])
    res.json({ ...station.get(), users: [...prevUsers, newUser] })
  }catch(e) {
    next(e)
  }
});

module.exports = stationsRouter
