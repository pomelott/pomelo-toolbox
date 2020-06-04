const { exec } = require('child_process');
const {Plog} = require('../print');
const plog = new Plog();
module.exports.exec = (cmd, opt = {}) => {
    return new Promise((resolve, reject) => {
      try {
        exec(cmd, opt, (err, stdout, stderr) => {
            
            if (!err) {
                resolve({stdout, stderr})
            } else {
                resolve({syserr: err, stdout, stderr})
            }
        })
      } catch (err) {
        plog.log(err, 5);
      }
        
    })
}

module.exports.classify = (argv) => {
  let valuableParam = argv.slice(2), cmdParam = valuableParam[0], objParam = {}, commonParam = [], nameParam = [];
  for (let i = 1; i < valuableParam.length; i++) {
      if (valuableParam[i].match(/=/)) {
          objParam[valuableParam[i].split('=')[0]] = valuableParam[i].split('=')[1];
          
      } else if (valuableParam[i].match(/^-+\w+/)) {
          commonParam.push(valuableParam[i])
      } else {
          nameParam.push(valuableParam[i])
      }
  }
  return {
      all: argv,
      valuableParam,
      cmdParam,
      objParam,
      commonParam,
      nameParam
  }
}