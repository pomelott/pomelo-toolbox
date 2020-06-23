/*
 * @Author: Tate
 * @Date: 2020-06-23 11:10:35
 * @LastEditors: Tate
 * @LastEditTime: 2020-06-23 14:46:26
 * @Description: 
 */ 
const {oraDefault} = require('../../static');
const chalk = require('chalk');
const ora = require('ora');
class LogPromise  {
    constructor (pro, opt) {
        this.ora = this.init(pro, opt);
        this.opt = {};
    }

    init (pro, opt) {
        let finalOpt;
        if (typeof opt === typeof '') {
            finalOpt = Object.assign({}, oraDefault, {text:chalk[oraDefault['color']](opt)})
        } else if (typeof opt === typeof {}) {
            finalOpt = Object.assign(oraDefault, opt)
        }
        this.opt = finalOpt;
        return ora.promise(pro, finalOpt)
    }

    succeed (txt) {
        this.ora.start(chalk.green(txt));
    }
}
module.exports = LogPromise;