let CSKObj=require("./CSK");
let {teamName,matches,description}=require("./MI")

console.log("top 2 IPL Teams");
console.log("--------------------------------------------------");
console.log(CSKObj.teamName);
CSKObj.matches();
CSKObj.description();

console.log("--------------------------------------------------");

console.log(teamName);
matches();
description();