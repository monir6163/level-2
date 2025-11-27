const fs = require("fs").promises;
const path = require("path");

async function loadFont(fontPath) {
  try {
    const data = await fs.readFile(fontPath);
    console.log(`Font loaded successfully from ${fontPath}`);
    return data;
  } catch (error) {
    console.error(`Error loading font from ${fontPath}:`, error);
    throw error;
  }
}

const fontFilePath = path.join(
  __dirname,
  "fonts",
  "Shelley Volante Script Regular.otf"
);
async function main() {
  const fontData = await loadFont(fontFilePath);
  console.log(`Custom Font Console ${fontData.length} bytes loaded.`);
}
main();
