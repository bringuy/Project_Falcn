CREATE DATABASE pernschool;

CREATE TABLE school(
  school_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  location VARCHAR(255),
  admission VARCHAR(255),
  image varbinary(max)
);