let fs = require('fs');
let path = require('path');

const isDirectory = source => fs.lstatSync(source).isDirectory();
const getDirectories = source => fs.readdirSync(source).map(name => path.join(source, name)).filter(isDirectory);


let dirs = getDirectories("./");
let links = [];
for (let i = 1; i < dirs.length; i++) {
    let link = `https://rohitkrishna094.github.io/codingtrain-practice/${dirs[i]}/`;
    links.push(link);
}

let readmeFile = __dirname + '/README.md';

let content = "# [codingtrain-practice](https://rohitkrishna094.github.io/codingtrain-practice/)\n\n";
content += "Click the links below for their demonstration\n\n";
for (let i = 0; i < links.length; i++) {
    content += `* [${dirs[i+1]}](${links[i]})\n`;
}
fs.writeFileSync(readmeFile, content);