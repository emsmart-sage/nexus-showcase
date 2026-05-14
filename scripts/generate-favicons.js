// Usage:
// 1. `npm install sharp png-to-ico`
// 2. `node scripts/generate-favicons.js`
// This reads `public/nexus-logo-favicon.svg` and writes:
// - public/apple-touch-icon.png (180x180 PNG)
// - public/favicon.ico (contains 16x16 and 32x32 PNGs)

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const pngToIco = require("png-to-ico");

async function run() {
  const root = path.resolve(__dirname, "..");
  const svg = path.join(root, "public", "nexus-logo-favicon.svg");
  if (!fs.existsSync(svg)) {
    console.error("SVG not found at", svg);
    process.exit(1);
  }

  const outPng = path.join(root, "public", "apple-touch-icon.png");
  await sharp(svg).resize(180, 180, { fit: "contain" }).png().toFile(outPng);
  console.log("Wrote", outPng);

  const tmp16 = path.join(root, "tmp-fav-16.png");
  const tmp32 = path.join(root, "tmp-fav-32.png");
  await sharp(svg).resize(16, 16, { fit: "contain" }).png().toFile(tmp16);
  await sharp(svg).resize(32, 32, { fit: "contain" }).png().toFile(tmp32);

  const icoBuf = await pngToIco([tmp16, tmp32]);
  const outIco = path.join(root, "public", "favicon.ico");
  fs.writeFileSync(outIco, icoBuf);
  console.log("Wrote", outIco);

  fs.unlinkSync(tmp16);
  fs.unlinkSync(tmp32);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
