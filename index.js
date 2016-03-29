'use strict';

const fs = require('fs');

const removeSeq = /[a-zA-Z_]+[a-zA-Z_0-9]*/g;

function readDir(dir,root,name){
  "use strict";
  const all = {};
  if(name){
    global[name] = all;
  }
  if(root){
	  dir = root + "/" + dir;
  }

  const files = fs.readdirSync(dir);
  for(var i = 0;i < files.length;i ++){
    const filePath = dir + "/" + files[i];
    if(fs.statSync(filePath).isDirectory()){
      all[files[i].match(removeSeq)[0]] = readDir(filePath);
    }else{
      if(/\.js$/.test(filePath)){
        all[files[i].split(".js")[0].match(removeSeq)[0]] = require(filePath);
      }
    }
  }
  return all;
}

module.exports = readDir;

