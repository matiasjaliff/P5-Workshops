-- Practicing queries

-- Find all movies released the year you were born

SELECT *
FROM movies
WHERE year = 1984;

-- How many movies of 1982 does our database have?

SELECT COUNT(*)
FROM movies
WHERE year = 1982;

-- Find all the actors and actresses who have "stack" in their last name

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

-- Top 100 of the most active actors and actresses, and the number of roles they had.
