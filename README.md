# read-lib
read dir as a Object
##Example
For example,here is out project structure:

    project
    |-lib
    |  |-database
    |  |    |-get.js
    |  |    \-put.js
    |  |-database.js
    |   \-other kind of tool or whatever
    |-app.js
    \-node_modules
  
you can do this in you app.js:

    lib = require("read-lib")("./lib",__dirname);
    console.log(lib);
  
the result is:

     { 
     database: { 
        get: [Function],  
        put: [Function], 
        MAX: 100,          //from database.js
        SIZE: 1024,        //from database.js
        db: {} },
     util: { 
       other: { whatever: [Function: other] }  
     } 
    }


  
