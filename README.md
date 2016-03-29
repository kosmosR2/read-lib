# read-lib

Require javascript from a dir as an Object recursively.

递归读取文件夹下的javascript到一个对象中。

##Usage

```
const result = require("read-lib")(targetDir,root,globalObjectName);
```


##Example
For example,here is out project structure:
```
    project
    |-lib
    |  |-database
    |  |    |-get.js
    |  |    \-put.js
    |  |-database.js
    |   \-other kind of tool or whatever
    |-app.js
    \-node_modules
```
you can do this in you app.js:
```
lib = require("read-lib")("./lib",__dirname);
console.log(lib);
```
the result is:
```
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
```

##Read as a global Object

```
require("read-lib")("./lib",__dirname,"library");
```

##Loading sequence

If you want call your dependenices in one Dir,you should make sure that dependenices will be loaded first.Add sequence number can determine the priority of file loading.

For example:

```
require("read-lib")("./lib",__dirname,"library");
```

```
    project
    |-lib
    |  |-database
    |  |    |-05dependenice.js
    |  |    |-10callDependenice.js
    |  |    |-get.js
    |  |    \-put.js
    |  |-database.js
    |   \-other kind of tool or whatever
    |-app.js
    \-node_modules
```
In this case,you can call `library.database.dependenice` in file `project/lib/database/10callDependenice.js`

