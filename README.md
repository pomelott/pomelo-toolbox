# pomelo-toolbox
daily node utils.

## Cmd
```js
    const {cmd} = require('pomelo-toolbox');
```
### cmd.exec(cmd, opt)
* 参数   
 cmd:String  命令   
 opt:Object  child_process 的exec options
* 返回值  Promise

```js
    await cmd.exec(cmd, opt)
```
### cmd.classify(argv)
* 参数   
 argv:process.argv  node 命令行 process.argv   
* 返回值  
    Object {   
        all: argv,  // 所有参数的key value形式    
        valuableParam,  // 有效参数   
        cmdParam,  // 子命令   
        objParam,  // 带等于号的参数   
        commonParam,   
        nameParam   
    }
```js
    cmd.classify(process.argv)
```

## Json
```js
    const {json} = require('pomelo-toolbox');
```
### json.upJson(cb, path)
* 参数   
 cb:Function  注入json文件内容的钩子，需要在函数中增加返回值。   
 path:String  json文件的路径    
* 返回值  Promise
```js
    upJson((jsonData) => {
        jsonData.name = 'test';
        return jsonData;
    }, './test.json')
```

### json.readJson(path, [key])
* 参数   
 path:String  json文件的路径    
 key:String  需要读取的key    
* 返回值  String
```js
    readJson('./package.json')
```
```js
    readJson('./package.json', 'version')
```

### json.appendJson(path, dataObj)
* 参数   
 path:String  json文件的路径    
 dataObj:Object  需要为文件追加的数据     
* 返回值  Boolean   
```js
    appendJson('./package.json', {
        test: 'test str'
    })
```


### json.writeJson(path, dataObj)
说明同appendJson相同， 但writeJson为全量覆盖   


## Print
```js
    const {print} = require('pomelo-toolbox')
```
### new print.Plog(opt)
* 参数   
 opt:Object  Plog 的配置项      
* 返回值  Plog实例    
```js
    new Plog({
        prefix: "pomelo-toolbox",
        des: true
    })
```
### new print.LogLoading(opt)
* 参数   
 opt:Object  LogLoading 的配置项      
* 返回值  LogLoading实例    
```js
    new LogLoading({
        txt: "we are trying, please wait...",
        prefixText: "",
        color: "cyan"
    })
```

## SSH
```js
    const {ssh} =  require('pomelo-toolbox');
```
### ssh.ssh(opt)
* 参数   
 opt:Object  配置项      
* 返回值  Promise 
```js
    ssh({
        host: '192.168.1.111',
        port: '8888',
        username: 'root',
        password: '123'
    })
```

## Step
```js
    const {step} = require('pomelo-toolbox');
```

### step.next(cb)
* 参数   
 cb:Function  异步函数      
* 返回值  Promise 
```js
    next((resolve) => {
        if (..) {
            resolve(true)
        }
    })
```
### step.sleep(time, cb)
* 参数 
 time: Number 延时时间
 cb:Function  延时结束后回调      
* 返回值  Promise 
```js
    await sleep(3000)
```
