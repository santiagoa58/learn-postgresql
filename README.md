# Learning PostgreSQL with Node

## Overview

This Node application is designed as a simple way for me to learn PostgreSQL. It runs within a Docker development container, and it includes a simple script that parses and executes SQL queries from `.sql` files located in the `src/queries` directory.

## Setup

**Clone the Repository**:

```bash
git clone https://github.com/santiagoa58/learn-postgresql.git
```

**Install Dependencies**:

- Inside the Node.js container, run `npm install` to install all necessary dependencies.

## Usage

**Starting the Application**:

- Run `npm start` to start the application.
- This executes the `index.js` script, which in turn processes SQL queries from `.sql` files in the `src/queries` directory.

**Adding New Queries**:

- You can add new `.sql` files to the `src/queries` directory.
- To execute these new queries, manually add them to the `run` function in `index.js`.