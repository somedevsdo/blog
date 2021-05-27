const fs = require("fs");
const path = require("path");
const util = require("util");
const plaiceholder = require("@plaiceholder/base64");
const sizeOf = require("image-size");

const run = async (directories) => {
  const images = [];

  directories.forEach((directory) => {
    fs.readdir(directory, async (_, files) => {
      files.forEach(async (file) => {
        try {
          const image = await util.promisify(fs.readFile)(path.join(directory, file));

          if (!file.endsWith("placeholders.json")) {
            console.log(`Generating placeholder for: ${path.join(directory, file)}`);
            const base64 = await plaiceholder.getBase64(image);
            const dimensions = sizeOf(image);
            const { height, width } = dimensions;
            console.log(dimensions);
            images.push({
              file: path.join(directory, file),
              placeholder: base64,
              size: {
                height,
                width,
              },
            });

            let data = JSON.stringify(images);
            fs.writeFileSync("./public/placeholders.json", data);
          }
        } catch (e) {}
      });
    });
  });
};

const flatten = (lists) => {
  return lists.reduce((a, b) => a.concat(b), []);
};

const getDirectories = (srcpath) => {
  return fs
    .readdirSync(srcpath)
    .map((file) => path.join(srcpath, file))
    .filter((p) => fs.statSync(p).isDirectory());
};

const getDirectoriesRecursive = (srcpath) => {
  return [srcpath, ...flatten(getDirectories(srcpath).map(getDirectoriesRecursive))];
};

const dirs = getDirectoriesRecursive("public");
run(dirs);
