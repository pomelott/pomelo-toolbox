# pomelo-toolbox
daily node utils.

## features

* prettier command line
* json tools
* ssh tools
* logger & loading

```js
    const {cmd} = require('pomelo-toolbox');
```
## API

### cmd.exec

* 参数


| param | type | description |
|:---:|:---:|:---:|
| cmd | String | 命令 |
| opt | Object | exec options for child_process |

* 返回值  Promise

```js
await cmd.exec(cmd, opt)
```

### cmd.classify

* 参数

| param | type | description |
|:---:|:---:|:---:|
| argv | process.argv | node 命令行 process.argv |

* 返回值  Object

    ````''json
        Object {
            all: argv,  // 所有参数的key value形式
            valuableParam,  // 有效参数
            cmdParam,  // 子命令
            objParam,  // 带等于号的参数
            commonParam,
            nameParam
        }
    ```

```js
cmd.classify(process.argv)
```

### Json

```js
const {json} = require('pomelo-toolbox');
```

#### json.upJson

* 参数

| param | type | description |
|:---:|:---:|:---:|
| cb | Function | 注入json文件内容的钩子，需要在函数中增加返回值。|
| path | String |json文件的路径|

* 返回值  Promise

    ```js
        json.upJson((jsonData) => {
            jsonData.name = 'test';
            return jsonData;
        }, './test.json')
    ```

#### json.readJson

* 参数

| param | type | description |
|:---:|:---:|:---:|
| path | Function | json文件的路径 |
| key | String |需要读取的key|

* 返回值  String

```js
    json.readJson('./package.json')
```

```js
    json.readJson('./package.json', 'version')
```

#### json.appendJson(path, dataObj)

* 参数
| param | type | description |
|:---:|:---:|:---:|
| path | String| json文件的路径 |
| dataObj | Object |需要为文件追加的数据|

* 返回值  Boolean

```js
    json.appendJson('./package.json', {
        test: 'test str'
    })
```

#### json.writeJson

说明同appendJson相同， 但writeJson为全量覆盖   

### Print

```js
    const {print} = require('pomelo-toolbox')
```

#### print.Plog

* 参数

| param | type | description |
|:---:|:---:|:---:|
| opt|Object| Plog的配置项 |

* 返回值  Plog实例

```js
    const Plog = require('pomelo-toolbox').Plog;
    new Plog({
        prefix: "pomelo-toolbox",
        des: true
    })
```

#### print.LogLoading

* 参数

| param | type | description |
|:---:|:---:|:---:|
| opt|Object|LogLoading的配置项 |

* 返回值  LogLoading实例

```js
    const {LogLoading} = require('pomelo-toolbox').LogLoading;
    new LogLoading({
        txt: "we are trying, please wait...",
        prefixText: "",
        color: "cyan"
    })
```

#### print.LogPromise

* 参数
| param | type | description |
|:---:|:---:|:---:|
|pro|Promise||
|opt|Object|LogLoading的配置项 |

* 返回值  LogLoading实例

```js
    const LogPromise = require('pomelo-toolbox').LogPromise;
    new LogPromise(pro, 'initing ...');
    new LogPromise(pro, opt);
```

### SSH

```js
    const {ssh} =  require('pomelo-toolbox');
```

#### ssh.ssh

* 参数

| param | type | description |
|:---:|:---:|:---:|
|opt|Object|LogLoading的配置项 |

* 返回值  Promise

```js
    ssh.ssh({
        host: '192.168.1.111',
        port: '8888',
        username: 'root',
        password: '123'
    })
```

### Step

```js
    const {step} = require('pomelo-toolbox');
```

#### step.next

* 参数

| param | type | description |
|:---:|:---:|:---:|
|cb|Function|异步回调|

* 返回值  Promise

```js
    step.next((resolve) => {
        if (..) {
            resolve(true)
        }
    })
```

#### step.sleep

* 参数
| param | type | description |
|:---:|:---:|:---:|
|time|Number|延时时间|
|cb|Function|延时结束时间|

* 返回值  Promise

```js
    await step.sleep(3000)
```
