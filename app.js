var fs = require("fs")
var markdown = require("markdown").markdown;

var markdown_dir = "app/markdown/";
var html_dir = "app/html/";
var file_name = "http-server.md";

var md = fs.readFileSync(markdown_dir + file_name);
var html = markdown.toHTML(md.toString());
fs.writeFile(html_dir + file_name, html, function(err) {
 if (err) {
   return console.error(err);
 }
 console.log("写入成功！");
});
