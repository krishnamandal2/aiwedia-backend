
require("dotenv").config(); // MUST be first



const cloudinary = require("./config/cloudconfig"); // ✅ NOW MATCHES FILE NAME
const fs = require("fs");
const path = require("path");

const imagesFolder = path.join(__dirname, "public");

fs.readdir(imagesFolder, async (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  for (const file of files) {
    const filePath = path.join(imagesFolder, file);

    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: "categories",
        use_filename: true,
        unique_filename: false,
      });

      console.log(`✅ ${file} → ${result.secure_url}`);
    } catch (error) {
      console.error( error.message);
    }
  }
});
