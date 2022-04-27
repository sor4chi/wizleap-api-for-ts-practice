CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  age INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, lastname, age) VALUES
  ('John', 'Doe', 25),
  ('Jane', 'Wick', 30),
  ('Kevin', 'Johnson', 35),
  ('Bob', 'Smith', 40);