const ora = require('ora');
const {oraDefault} = require('../../static');
const chalk = require('chalk')
class Loading {
    constructor (opt) {
        this.ora = this.init(opt);
    }

    init (opt) {
        let finalOpt;
        if (typeof opt === typeof '') {
            finalOpt = Object.assign({}, oraDefault, {text:chalk[oraDefault['color']](opt)})
        } else if (typeof opt === typeof {}) {
            finalOpt = Object.assign(oraDefault, opt)
        }
        return ora(finalOpt).start();
    }
    stop () {
        this.ora.stop();
    }

    succeed (txt) {
        this.ora.succeed(chalk.green(txt))
    }

    fail (txt) {
        this.ora.fail(chalk.red(txt))
    }

    warn (txt) {
        this.ora.warn(chalk.yellow(txt))
    }

    notice (txt) {
        this.ora.warn(chalk.rgb(255, 255, 102)(txt))
    }
}
module.exports = Loading