-- Drop the table if it exists
DROP TABLE IF EXISTS my_table;

-- Create the table
CREATE TABLE my_table (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- Insert data into the table
INSERT INTO my_table (name) VALUES 
    ('Alice'),
    ('Bob'),
    ('Charlie');

-- Select all data from the table
SELECT * FROM my_table;
