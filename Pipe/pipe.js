var fs=require('fs');

var zlib=require('zlib');

const { writer } = require('repl');

var readerStream=fs.createReadStream('input.txt');

var writeStream=fs.createWriteStream('output.txt');

readerStream.pipe(writeStream);

//zip
//to create a zip file uncomment this
// fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(
//     fs.createWriteStream('output.txt.gz')
// );

//unzip
//to unzip uncomment this
// fs.createReadStream('output.txt.gz').pipe(zlib.createGunzip()).pipe(
//     fs.createWriteStream('input.txt')
// );
