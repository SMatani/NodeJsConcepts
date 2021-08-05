const path=require('path');

//.dirname(_filename)

console.log("Directory of file: "+path.dirname(__filename));
//output-->Directory of file: C:\Users\839095\OneDrive - Cognizant\Desktop\NodejsTraining\Day1\Path

console.log("Extension of file: "+path.extname(__filename));
//OUTPUT-->console.log("Directory of file: "+path.dirname(__filename));

//check if the path format/definition is correct
//doesn't matter it is present or not
console.log("The file format is correct :"+path.isAbsolute('C:\\Users\\839095\\OneDrive - Cognizant\\Desktop\\NodejsTraining\\Day1\\Path'));
//output-->true

console.log("The file format is correct :"+path.isAbsolute('\\Server'));
//output-->true

console.log("The file format is correct :"+path.isAbsolute('asd'));
//output-->false

//Joins all given paths together
console.log(path.join('file1','file2','file3'));
//output-->file1\file2\file3

//normalizes the given path
console.log(path.normalize('g:/define//machine/////time'));
//output-->g:\define\machine\time

//represents significance elements
console.log(path.parse('/home/users/directory/file.txt'));
//output-->{ root: '/',
//   dir: '/home/users/directory',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
