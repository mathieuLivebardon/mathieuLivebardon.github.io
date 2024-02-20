const fs = require('fs');
const path = require('path');

const htmlFilesPath = [
  '../html/navigationHead.html',
  '../html/modals.html',
  '../html/portfolio-grid.html',
  '../html/CV.html',
  '../html/contact.html',
  '../html/footer.html',
];

const readFile = (filePath) => {
  return fs.readFileSync(path.join(__dirname, filePath), 'utf-8');
};

let result = '';
htmlFilesPath.forEach((file) => {
  result += '\n' + readFile(file);
});

let indexHtml = fs.readFileSync(path.join(__dirname, '../html/index.html'),'utf-8');

indexHtml = indexHtml.replace(new RegExp('BODY_HERE','g'), result);

fs.writeFileSync(path.join(__dirname, '../public/index.html'), indexHtml);
