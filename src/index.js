const path = require("path");
const fs = require("fs").promises;
const { program } = require("commander");
const { executeQueriesFromFile } = require("./executeQueries");

program
  .version("1.0.0")
  .description("CLI tool to execute PostgreSQL queries from files")
  .option("-f, --file <file>", "Path to the query file")
  .option(
    "-d, --directory <directory>",
    "Path to the directory containing query files"
  )
  .parse(process.argv);

async function run(options) {
  if (options.file) {
    const filePath = path.join(__dirname, options.file);
    try {
      await executeQueriesFromFile(filePath);
    } catch (error) {
      console.error(
        `Error executing queries from file: ${filePath}`,
        error.message
      );
      process.exit(1);
    }
  } else if (options.directory) {
    const directoryPath = path.resolve(__dirname, options.directory);
    try {
      const filenames = await fs.readdir(directoryPath);
      for (const filename of filenames) {
        await executeQueriesFromFile(path.join(directoryPath, filename));
      }
    } catch (error) {
      console.error(`Error reading directory: ${directoryPath}`, error.message);
      process.exit(1);
    }
  } else {
    console.error("Please provide either a file or a directory.");
    process.exit(1);
  }
  process.exit();
}

run(program.opts());
