const nodeSSH = require('node-ssh');
const {logLoading} = require('../print');
let ssh = new nodeSSH()

module.exports.ssh = (opt) => {
    return new Promise((resolve, reject) => {
        try {
            let loading = logLoading(`connecting to SSH@${opt.host}...`)
            ssh.connect({
                ...opt,
                tryKeyboard: true,
                onKeyboardInteractive: (name, instructions, instructionsLang, prompts, finish) => {
                    if (prompts.length > 0 && prompts[0].prompt.toLowerCase().includes('password')) {
                      finish([password])
                    }
                }
            }).then(() => {
                loading.succeed(`connected to SSH@${opt.host}`)
                resolve(ssh)
            })
        } catch (err) {
            reject(err)
        }
    }) 
}
