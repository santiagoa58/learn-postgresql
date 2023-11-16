const db = require("./db");
const path = require("path");
const fs = require("fs").promises;

const getQueriesFromFile = async (filepath) => {
  const data = await fs.readFile(filepath);
  const queries = data
    .toString()
    .split("\n")
    .filter((line) => !line.startsWith("--"))
    .join(" ")
    .split(";")
    .map((query) => query.trim())
    .filter((line) => line.length > 0);
  return queries;
};

const executeQueries = async (queries) => {
  try {
    for (const query of queries) {
      const res = await db.query(query);
      res.rows?.length && console.log(res.rows);
    }
  } catch (err) {
    console.error("ERROR", err.message);
  }
};

const executeQueriesFromFile = async (filepath) => {
  const queries = await getQueriesFromFile(filepath);
  console.log(queries);
  await executeQueries(queries);
};

async function run() {
  await executeQueriesFromFile(path.join(__dirname, "queries/users.sql"));
  await executeQueriesFromFile(path.join(__dirname, "queries/anime.sql"));
}

run();
