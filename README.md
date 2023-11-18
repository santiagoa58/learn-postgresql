# Learning PostgreSQL with Node

## Overview

This Node application is designed as a simple way for me to learn PostgreSQL. It runs within a Docker development container, and it includes a simple script that parses and executes SQL queries from `.sql` files located in the `src/queries` directory.

## Setup

**Clone the Repository**:

```bash
git clone https://github.com/santiagoa58/learn-postgresql.git
```

**Add Environment Variables**:
add a `.env` file to the root directory with the following variables:

```bash
POSTGRES_PASSWORD=postgres
POSTGRES_USER=postgres
POSTGRES_DB=postgres
POSTGRES_HOST=db
POSTGRES_POST=5432
```

these are the default values for the PostgreSQL container.

**Install Dependencies**:

- Inside the Node.js container, run `npm install` to install all necessary dependencies.

## Usage

**Starting the Application**:

There are three scripts that can be used to start the application:

- `npm start`
  - This script is used to start the application.
  - specify the file to execute with the -f flag.
  ```bash
  npm start -- -f ./queries/<file_name>.sql
  ```
  - specify the directory to execute all files in the directory with the -d flag.
  ```bash
    npm start -- -d ./queries
  ```
- `npm run exec`
  - This script is a simpler version of the start script. It will execute the src/index.js file without the -f flag.
  ```bash
  npm run exec ./queries/<file_name>.sql
  ```
- `npm run exec:all`
  - This script is used to execute all of the queries in the src/queries directory.
  ```bash
  npm run exec:all
  ```
  - This is equivalent to running `npm start -- -d ./queries`

**Adding New Queries**:

You can add new `.sql` files to the `src/queries` directory and execute them using one of the commands above.
