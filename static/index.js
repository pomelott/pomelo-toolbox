
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
    txt: "we are trying, please wait...",
    prefixText: "",
    color: "cyan"
}
