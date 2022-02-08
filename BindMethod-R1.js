//R1
Function.prototype.bind = function(whoIsCallingMe) {
    const self = this
    return function() {
        return self.apply(whoIsCallingMe, arguments)
    }
}
this.x = 9
var module = {
    x: 81,
    getX: function() { return this.x }
}

console.log(module.getX()) // 81

var getX = module.getX
console.log(getX()) // 9, porque en este caso, "this" apunta al objeto global

// Crear una nueva función con 'this' asociado al objeto original 'module'
var boundGetX = getX.bind(module)
console.log(boundGetX()) // 81