'use strict'

// <Define a model using bookshelf that describes a song object, as well as
// static methods for getting one or all songs from the db>
const Song = bookshelf.Model.extend({
  tableName = 'song'
})
// When adding the 'table' property use your old friend DB Browser for SQLite to
// open up the musichistory db and inspect the tables. Add the appropriate table name for
// interfacing with the songs collection
