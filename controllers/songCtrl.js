'use strict';

// <require a song model>
const { bookshelf } = require('../db/database');
const Song = require('../models/song')

// < use model methods for getting all songs and one song then send the response back with the data>
module.exports.getSongs = (req, res, next) => {
  Song.getall()
  .then( (songs) => {
    res.status
  })

}
// <stretch goal: methods for adding, deleting, editing a song>
