# read-dir
read dir as a Object
##Example
For example,here is out project structure:

  project
  |-lib
  |  |-database
  |  |    |-method1.js
  |  |    \-method2.js
  |  |-database.js
  |   \-other kind of tool or whatever
  |-app.js
  \-node_modules
  
you can do this in you app.js:

  lib = require("read-dir");
  console.log(lib);
  
the result is:

  
