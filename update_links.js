const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'src/app/ventanas-pvc');

function traverseDist(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDist(fullPath);
    } else if (file.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace in breadcrumbs
      content = content.replace(
        />Puertas y Ventanas PVC<\/Link>/g,
        '>Puertas y Ventanas PVC Ecoven Plus</Link>'
      );
      
      // Replace in sidebar arrays
      content = content.replace(
        /'Puertas y Ventanas PVC'/g,
        "'Puertas y Ventanas PVC Ecoven Plus'"
      );

      fs.writeFileSync(fullPath, content);
      console.log(`Updated ${fullPath}`);
    }
  }
}

traverseDist(dirPath);
