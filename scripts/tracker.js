const fs = require("fs");

const data = fs.readFileSync("data/projects.json", "utf8");

console.log("Projects:");
console.log(data);