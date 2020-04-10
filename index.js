const fs = require('fs');

if(process.argv.length > 2 && (process.argv[2]=='--Nebo' || process.argv[2]=='--nebo')){

  const createDir = (dirPath) => {
    fs.mkdirSync(process.cwd() + dirPath,{recursive:true},(error) => {
      if(error){
        console.log('Error creating directory:' + error);
      }
    });
  } 

  const createFile = (filePath,fileContent) => {
    fs.writeFile(filePath, fileContent, (error) => {
      if(error){
        console.log('Error creating file: ' + error);
      }
    });
  }

  const neboDir = '/Nebo/';

  createDir(neboDir);

  const neboFile = 'Nebo/Nebo.js';

  createFile(neboFile);

  const testFolder = '/Nebo/_test_/';

  createDir(testFolder);

  const testFile = 'Nebo/_test_/Nebo.test.js';

  createFile(testFile);
}

