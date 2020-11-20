const {level, logDefault} = require('../../static');
const chalk = require('chalk');
const outPut = function ({
    target, prefix, msgChalk, des
}) {
    if (!prefix) {
        prefix = '';
    } else {
        prefix = chalk.bgBlack.rgb(0, 105, 255)(`[${prefix}]`) + ':';
    }
    des = des ? des : '';
    if (typeof target === typeof '') {
        console.log(`${prefix}${des} ${msgChalk(target)}`)
    } else if (typeof target === typeof {} || typeof target === typeof []) {
        for (let key in target) {
            console.log(`${prefix}${des} ${msgChalk(`${key}: ${JSON.stringify(target[key])}`)}`)
        }
    } else {
        return false;
    }
}

class Plog {
    constructor (opt = {}) {
        this.opt = Object.assign({}, logDefault, opt)
    }

    log (target, levelCode) {
        const levelName = level[levelCode];
        switch (levelName) {
            case 'info' : 
                outPut({
                    target,
                    prefix: this.opt.prefix,
                    msgChalk: chalk.white,
                    des: this.opt.des ? chalk.bgWhite.black('info') : '',
                });
                break;
            case 'process':
                outPut({
                    target,
                    prefix: this.opt.prefix,
                    msgChalk: chalk.rgb(0, 191, 255),
                    des: this.opt.des ? chalk.bgRgb(0, 191, 255).white('process') : '',
                });
                break;
            case 'finish':
                outPut({
                    target,
                    prefix: this.opt.prefix,
                    msgChalk: chalk.rgb(0, 255, 204),
                    des: this.opt.des ? chalk.bgRgb(0, 255, 204).black('finish') : ''
                });
                break;
            case 'warn':
                outPut({
                    target,
                    prefix: this.opt.prefix,
                    msgChalk: chalk.rgb(255, 128, 0),
                    des: this.opt.des ? chalk.bgRgb(255, 128, 0).white('warn') : '',
                });
                break;
            case 'error':
                outPut({
                    target,
                    prefix: this.opt.prefix,
                    msgChalk: chalk.red,
                    des: this.opt.des ? chalk.bgRed.white('error') : '',
                });
                break;
            case 'notice':
                outPut({
                    target,
                    prefix: this.opt.prefix,
                    msgChalk: chalk.rgb(204, 102, 255),
                    des: this.opt.des ? chalk.bgRgb(204, 102, 255).white('notice') : '',
                });
                break;
            case 'link':
                outPut({
                    target,
                    prefix: this.opt.prefix,
                    msgChalk: chalk.gray,
                    des: this.opt.des ? chalk.bgGray.white('link') : '',
                });
                break;
            case 'success':
                outPut({
                    target,
                    prefix: this.opt.prefix,
                    msgChalk: chalk.rgb(153, 255, 102),
                    des: this.opt.des ? chalk.bgRgb(153, 255, 102).gray('success') : ''
                });
                break;
            default:
                outPut({
                    target,
                    prefix: this.opt.prefix,
                    msgChalk: chalk.white,
                    des: this.opt.des ? chalk.bgWhite.black : '',
                });
        }
    }
    info (txt) {
        this.log(txt, 1)
    }
    process (txt) {
        this.log(txt, 2)
    }
    finish (txt) {
        this.log(txt, 3)
    }
    warn (txt) {
        this.log(txt, 4)
    }
    error (txt) {
        this.log(txt, 5)
    }
    notice (txt) {
        this.log(txt, 6)
    }
    succeed (txt) {
        this.log(txt, 7)
    }

}
module.exports = Plog