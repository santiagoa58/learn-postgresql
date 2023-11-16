-- Drop the table if it exists
DROP TABLE IF EXISTS anime_list;

-- Create the table
CREATE TABLE anime_list (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    tier TEXT NOT NULL,
    release_year INTEGER
);

INSERT INTO anime_list (title, tier, release_year) VALUES 
('One Punch Man', 'S Tier', 2012),
('Re:Zero', 'God Tier', 2008),
('Dragon Ball Z', 'God Tier', 1976);

SELECT * FROM anime_list;