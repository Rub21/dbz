var fs = require('fs')
var himalaya = require('himalaya')
var html = fs.readFileSync('index.html', { encoding: 'utf8' })
var hrefs = himalaya.parse(html)
var links = [];
for (var i = 0; i < hrefs.length; i++) {
    var element = hrefs[i];
    links.push(element.attributes[1].value);
}
console.log(JSON.stringify(links));