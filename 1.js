function MockNew(Constructor, ...args) {
    let obj = Object.create(Constructor.prototype)
    let res = Constructor.apply(obj, args)
    if ((res !== 'null' && typeof res === 'object') || typeof res === 'function') {
        return res
    }
    return obj
}

function Fn(name) {
    this.name = name
}

Fn.prototype.say = function () {
    console.log('hello', this.name)
}

let fn = new Fn('peiqi')
console.log(fn.name)
fn.say()