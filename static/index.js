/*
 * @Author: Tate
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: Tate
 * @LastEditTime: 2020-06-23 14:48:04
 * @Description: 
 */ 

const path = require('path');
module.exports.confDir = path.resolve(__dirname, './conf.json')
module.exports.level = {
    "1": "info",
    "2": "process",
    "3": "finish",
    "4": "warn",
    "5": "error",
    "6": "notice",
    "7": "success"
}
module.exports.logDefault = {
    prefix: "pomelo-toolbox",
    des: true
}
module.exports.oraDefault = {
    text: "we are trying, please wait...",
    prefixText: "",
    color: "cyan"
}
