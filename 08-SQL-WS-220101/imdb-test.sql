-- Commands to create tables named movies and actors in db imdb-test.sqlite3.db
-- Copy, paste and execute these commands in the sqlite prompt

CREATE TABLE movies(
  id INTEGER PRIMARY KEY,
  name TEXT DEFAULT NULL,
  year INTEGER DEFAULT NULL,
  rank REAL DEFAULT NULL
);

CREATE TABLE actors(
  actor_id INTEGER,
  movie_id INTEGER,
  role_name TEXT DEFAULT NULL
);