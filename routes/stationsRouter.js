const { Router } = require('express');
const { Station } = require('../models');
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
stationsRouter.get('/:id', restrict, async (req, res) => {
  try {
    const { id } = req.params;
    const station = await Station.findbyPk(id);
    res.json(station)
  } catch(err) {
    console.error({error: e});
  }
})

// gets all comments by station id '/stations/:id/comments'
stationsRouter.get('/:id/comments', restrict, async (req, res) => {
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
stationsRouter.post('/:id/comments/new', restrict, async (req, res) => {
  try {
      const newComment = await Comment.create(req.body);
      res.json(newComment);
    } catch (e) {
      console.error({error: e});
    }
})

module.exports = stationsRouter
