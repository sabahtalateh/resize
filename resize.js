const sharp = require('sharp');
const fs = require('fs');

if (process.argv.length < 4) {
    console.log("enter width and height");
    return
}

const width = parseInt(process.argv[2]);
const height = parseInt(process.argv[3]);

// Parse Quality
let quality = process.argv[4];
if (quality === undefined) {
    quality = 50;
} else {
    quality = parseInt(quality);
}

// Parse Postfix
let postfix = process.argv[5];
if(typeof process.argv[5] === 'undefined') {
    postfix = "s";
}

const inputFolder = './input';
const resizedFolder = './resized';
const background = { r: 255, g: 255, b:255, alpha:1 };

fs.readdirSync('input').forEach(file => {
    const inputFilePath = `${inputFolder}/${file}`;

    const fileNameNoExt = file.split('.').slice(0, -1).join('.');
    const resizeFilePath = `${resizedFolder}/${fileNameNoExt}-${postfix}.jpg`;

    sharp(inputFilePath)
        .resize({ width: width, height: height, fit: 'contain', background: background })
        .jpeg({ quality: quality, progressive: true })
        .toFile(resizeFilePath)
        
        .then(function(newFileInfo) {
            console.log(`${inputFilePath} --> ${resizeFilePath} [${width}x${height}]`);
        })
        .catch(function(err) {
            console.log(err);
            console.log("Error occured");
        });
});
