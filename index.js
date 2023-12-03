import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{
    "message":"Type in your url",
    "name":"URL"
    /* Pass your questions in here */
  }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const URL= answers.URL;
    var qr_img = qr.image(URL);
    qr_img.pipe(fs.createWriteStream("qr_img.png"));

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });