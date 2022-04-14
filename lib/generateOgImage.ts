import { registerFont, createCanvas, loadImage } from "canvas";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import path from "path";

const wrapText = (context, text, x, y, maxWidth, lineHeight): void => {
  context.font = "63px 'Poppins Black'";
  context.fillStyle = "#E8EDF2";

  const words = text.split(" ");
  let line = "";
  let lineCount = 1;
  let newY = y;

  // need to run a loop so we know the number of lines before we assign the spacing...
  for (let i = 0; i < words.length; i++) {
    const fakeLine = `${line + words[i]} `;
    if (context.measureText(fakeLine).width > maxWidth && i > 0) {
      line = `${words[i]} `;
      lineCount += 1;
    } else {
      line = fakeLine;
    }
  }

  // reset the line
  line = "";

  let startingTopSpace = 0;

  // depending on the number of lines, we need to adjust the spacing
  if (lineCount === 1) {
    startingTopSpace = 245;
  } else if (lineCount === 2) {
    startingTopSpace = 210;
  } else if (lineCount === 3) {
    startingTopSpace = 165;
  } else if (lineCount === 4) {
    startingTopSpace = 110;
  }

  // loop through words and determine when new lines need to be added and add them with appropriate spacing
  for (let n = 0; n < words.length; n++) {
    const testLine = `${line + words[n]} `;
    // if the current width is greater than maxWidth, then we know we can show the line and move on
    if (context.measureText(testLine).width > maxWidth && n > 0) {
      // need to add extra space here for the line stuff I think
      context.fillText(line, x, newY + startingTopSpace);
      // reset the words
      line = `${words[n]} `;
      newY += lineHeight + startingTopSpace;
      startingTopSpace = 0;
    } else {
      // else we just add the word to the current line
      line = testLine;
    }
  }

  // if it's one line, we never hit the above functionality, so add the extra space here
  if (lineCount === 1) {
    newY += startingTopSpace;
  }

  context.fillText(line, x, newY);
};

// our function will receive, in this case, the title of the blog post
// as a parameter
export const createImage = async ({ author, avatar, title }): Promise<Buffer> => {
  registerFont("./lib/open-graph/Poppins-Black.ttf", {
    family: "Poppins Black",
  });
  registerFont("./lib/open-graph/Poppins-Bold.ttf", {
    family: "Poppins Bold",
  });
  registerFont("./lib/open-graph/Poppins-Light.ttf", {
    family: "Poppins Light",
  });

  // dimension of our image
  const width = 1200;
  const height = 627;

  // create an empty canvas
  const canvas = createCanvas(width, height);

  const context = canvas.getContext("2d");

  // fill our frame with a background
  context.fillStyle = "#1F2132";
  context.fillRect(0, 0, width, height);

  // add footer rectangle
  context.fillStyle = "#090D18";
  context.fillRect(0, height - 186, width, 186);

  // save state of the canvas before we clip
  context.save();

  // load and draw our background image
  const image = await loadImage(`./public${avatar}`);
  context.beginPath();
  context.arc(50 + 50, height - 50 - 43, 50, 0, 2 * Math.PI);
  context.clip();
  context.drawImage(image, 50, height - 100 - 43, 100, 100);

  // restore state of the canvas after we clip
  context.restore();

  // add the logo
  const logo = await loadImage(`./lib/open-graph/logo.png`);
  context.drawImage(logo, width - 158 - 50, height - 84 - 49, 158, 84);

  // add the title
  wrapText(context, title, 80, 0, 825, 90);

  // add user name at the bottom
  context.fillStyle = "#E8EDF2";
  context.font = "34px 'Poppins Bold'";
  context.fillText(author, 180, height - 80);

  // add domain name, calculating the width of the username
  const nameWidth = context.measureText(author).width;
  context.fillStyle = "#E8EDF2";
  context.font = "34px 'Poppins Light'";
  context.fillText(" / somedevsdo.com", nameWidth + 182, height - 80);

  return canvas.toBuffer("image/png");
};

export const generateOgImage = async ({ author, avatar, slug, title }): Promise<void> => {
  // the path where our image is going to be saved.
  const dir = path.resolve("public", "og");
  const filepath = path.resolve(dir, `${slug}.png`);

  // check if directory doesn't exist, if it doesn't, we create it
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }

  // check if the image already exists, if it does we don't need to generate it again
  if (!existsSync(filepath) || process.env.NODE_ENV === "development") {
    const imgBuffer = await createImage({ title, avatar, author });

    writeFileSync(filepath, imgBuffer);
  }
};
