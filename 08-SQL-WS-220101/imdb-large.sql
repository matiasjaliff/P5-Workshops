-- Workshop 08 - SQL: Practicing queries.

-- Find all movies released the year you were born.

SELECT *
FROM movies
WHERE year = 1984;

-- How many movies of 1982 does our database have?

SELECT COUNT(*)
FROM movies
WHERE year = 1982;

-- Find all the actors and actresses who have "stack" in their last name.

SELECT *
FROM actors
WHERE last_name LIKE "%stack%";

-- What is the most popular name?

SELECT first_name, COUNT(*) AS occurrences
FROM actors
GROUP BY first_name
ORDER BY COUNT(*) DESC
LIMIT 1;

-- What is the most popular last name?

SELECT last_name, COUNT(*) AS occurrences
FROM actors
GROUP BY last_name
ORDER BY COUNT(*) DESC
LIMIT 1;

-- What is the most popular full name?

SELECT first_name || " " || last_name AS full_name, COUNT(*) AS occurrences
FROM actors
GROUP BY full_name
ORDER BY COUNT(*) DESC
LIMIT 10;

-- Top 10 of the most active actors and actresses, and the number of roles they had.

SELECT first_name, last_name, COUNT(*) AS roles
FROM actors
  INNER JOIN roles ON actors.id = roles.actor_id 
GROUP BY id
ORDER BY COUNT(*) DESC
LIMIT 10;

-- How many movies of each genre does IMDB have, ordered by the most popular?

SELECT genre, COUNT(*)
FROM movies_genres
  INNER JOIN movies ON movies_genres.movie_id = movies.id
GROUP BY genre
ORDER BY COUNT(*) ASC;

-- List first and last name of all the actors and actresses who starred in the movie "Braveheart" of 1995 and order them alphabetically.

SELECT actors.first_name, actors.last_name
FROM actors
  INNER JOIN roles ON actors.id = roles.actor_id
  INNER JOIN movies ON roles.movie_id = movies.id
WHERE movies.name = "Braveheart" AND movies.year = 1995
ORDER BY actors.last_name ASC;

-- List all directors who directed movies of "film-noir" genre in a year divisible by 4. The query must return name of the director, name of the movie and release year, ordered by the name of the movie.

SELECT directors.first_name || " " || directors.last_name AS full_name, movies.name AS movie, movies.year
FROM directors
  INNER JOIN movies_directors ON directors.id = movies_directors.director_id
  INNER JOIN movies ON movies_directors.movie_id = movies.id
  INNER JOIN movies_genres ON movies.id = movies_genres.movie_id
WHERE movies_genres.genre = "Film-Noir" AND movies.year % 4 == 0
ORDER BY name ASC;

-- List all actors and actresses who worked with Kevin Bacon in a drama movie. Include name of the movie and exclude Kevin Bacon.

-- First solution

SELECT movies.name AS movie, actors.first_name, actors.last_name
FROM actors
  INNER JOIN roles ON actors.id = roles.actor_id
  INNER JOIN movies ON roles.movie_id = movies.id
WHERE movies.id IN (
  SELECT movies.id
  FROM movies
    INNER JOIN roles ON movies.id = roles.movie_id
    INNER JOIN actors ON roles.actor_id = actors.id
    INNER JOIN movies_genres ON movies.id = movies_genres.movie_id 
  WHERE actors.first_name = "Kevin" AND actors.last_name = "Bacon" AND movies_genres.genre = "Drama"
  ) AND actors.first_name != "Kevin" AND actors.last_name != "Bacon"
ORDER BY movie;

-- Second solution (better)

SELECT movies.name AS movie, actors.first_name, actors.last_name
FROM movies
  INNER JOIN roles ON movies.id = roles.movie_id
  INNER JOIN actors ON roles.actor_id = actors.id
-- Search for movies where Kevin Bacon worked in...
WHERE movies.id IN (
  SELECT movie_id
  FROM roles
  WHERE actor_id = (
    SELECT id
    FROM actors
    WHERE first_name = "Kevin" AND last_name = "Bacon"
  )
)
-- ...and its genre is Drama,
AND movies.id IN (
  SELECT movies.id
  FROM movies
  INNER JOIN movies_genres ON movies.id = movies_genres.movie_id
  WHERE movies_genres.genre = "Drama"
)
--- but does not include Kevin Bacon.
AND (actors.first_name != "Kevin" AND actors.last_name != "Bacon")
ORDER BY movies.name;

-- Who are the actors and actresses who worked in any movies pre-1900 and post-2000?

SELECT actors.id, actors.first_name, actors.last_name
FROM actors
WHERE actors.id IN (
  SELECT DISTINCT roles.actor_id
  FROM roles
    INNER JOIN movies ON roles.movie_id = movies.id
  WHERE movies.year < 1900
)
AND actors.id IN (
  SELECT DISTINCT roles.actor_id
  FROM roles
    INNER JOIN movies ON roles.movie_id = movies.id
  WHERE movies.year > 2000
);

-- Find actors and actresses who have had five or more roles in the same movie after 1990. Make a query that returns the name of the actor or actress, the name of the movie, and the number of different roles they had in that movie.

SELECT actors.first_name, actors.last_name, movies.name AS movie, movies.year, COUNT(roles.role) AS roles
FROM actors
  INNER JOIN roles ON actors.id = roles.actor_id
  INNER JOIN movies ON roles.movie_id = movies.id
WHERE movies.year >= 1990
GROUP BY actors.id, movies.id
HAVING COUNT(roles.role) >= 5
ORDER BY movies.name;

-- Count how many movies had only actresses. Classify them by year.

SELECT movies.year, COUNT(DISTINCT movies.id) AS movies
FROM movies
  INNER JOIN roles ON movies.id = roles.movie_id
WHERE movies.id NOT IN (
  SELECT DISTINCT roles.movie_id
  FROM roles
    INNER JOIN actors ON roles.actor_id = actors.id
  WHERE actors.gender == "M"
)
GROUP BY movies.year;