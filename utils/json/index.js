const fs = require('fs');
const fse = require('fs-extra');
const {next} = require('../step')
module.exports.upJson = (cb, dir = './package.json') => {
    return next((resolve) => {
        let jsondata = fs.readFileSync(dir, {encoding: 'utf8'});
        // cb(JSON.parse(jsondata))
        let finalJson = cb(JSON.parse(jsondata));
        
        if (!finalJson) {
            throw new Error("写入json文件不能为空！")
        }
        fs.writeFileSync(dir, JSON.stringify(finalJson, null, '\t'), {encoding: 'utf8'});
        resolve(true)
    })
    
}


module.exports.readJson = (jsonDir, key) => {
    if (!key) {
        return fse.readJSONSync(jsonDir)
    }
    return fse.readJSONSync(jsonDir)[key]
}

module.exports.appendJson = (targetJson, obj) => {
    let cnt = fse.readJSONSync(targetJson), temp;
    if (!cnt) return false;
    temp = Object.assign(cnt, obj);
    this.writeJson(targetJson, temp);
    return true;
}

module.exports.writeJson = (targetJson, obj) => {
    fs.writeFileSync(targetJson, JSON.stringify(obj, null, '\t'), {encoding: 'utf-8'})
}