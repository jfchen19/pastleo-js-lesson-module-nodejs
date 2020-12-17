const fs = require('fs/promises')

const filename = process.argv[2];
if (!filename) {
  console.error("Please provide json filename");
  process.exit(127)
}

const main = async jsonFilename => {
  // let's start coding
  const jsonString = await fs.readFile(jsonFilename, 'utf8');
  // console.log(jsonContent);
  const json = JSON.parse(jsonString);
  // console.log(json);
  process.stdout.write(JSON.stringify(json, null ,2))
}

main(filename);
