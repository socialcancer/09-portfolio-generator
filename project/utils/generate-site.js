const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method

            resolve({
                ok: true,
                message: 'File created!'
            });

        });

    });
};
//create a function called copy file and it does not need any parameters
const copyFile = () => {
    //return a promise and add error checking
    return new Promise((resolve, reject) => {
        fs.copyFile('/09-portfolio-generator/project/src/style.css', '/09-portfolio-generator/project/dist/style.css', err => {
            //if err then reject the error and return out of the function
            if (err) {
                reject(err);
                return;
            }
            //if successful write a success message
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
};
//exporting the two newly created functions by using shorthand property names
module.exports = { writeFile, copyFile };
