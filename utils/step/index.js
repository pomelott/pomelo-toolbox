module.exports.next = (cb) => {
    return new Promise((resolve, reject) => {
        try {
            cb(resolve)
        } catch (err) {
            reject(err)
        }
    })
}

module.exports.sleep = (time, cb = () => {}) => {
    let timer = null;
    return this.next((resolve) => {
        timer = setTimeout(() => {
            clearTimeout(timer)
            resolve(true)
        }, time);
        cb(timer)
    })
}