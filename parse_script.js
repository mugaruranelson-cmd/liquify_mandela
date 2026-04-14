const fs = require('fs');

const scriptContent = fs.readFileSync('../LIQUIFY Sales Website/script.js', 'utf8');
const match = scriptContent.match(/const catalogueProducts = (\[[\s\S]*?\]);\s*\n\/\/ Initialize Shop/);

if (match) {
    // We can evaluate this safely since it's just mock data array
    const arrayStr = match[1];
    const data = eval(arrayStr);
    fs.writeFileSync('catalogue.json', JSON.stringify(data, null, 2));
    console.log('Successfully wrote catalogue.json');
} else {
    console.log('Could not match catalogueProducts array.');
}
