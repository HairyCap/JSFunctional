//v1
function MONAD() {
	return function unit(value) {
		const monad = Object.create(null);
		monad.bind = function (func) {
			return func(value);
		}
		return monad;
	}
}

var identity = MONAD();
var monad = identity("Hello world.")
monad.bind(alert);

//v2
function MONAD() {
	let prototype = Object.create(null);
	function unit(value) {
		let monad = Object.create(prototype);
		monad.bind = function (func, args) {
			return func(value, ...args);
		}
		return monad;
	}

	unit.lift = function (name, func) {
		prototype[name] = function (...args) {
			return unit(this.bind(func, args));
		}
		return unit;
	}
	return unit;
}

//v3
function MONAD(modifier) {
	let prototype = Object.create(null)
	function unit(value) {
		let monad = Object.create(prototype)
		monad.bind = function (func, args){
			return func(value, ...args)
		}
		if(type modifier === 'function'){
			modifier(monad,value)
		}
		return monad
	}
	return unit
}

const maybe = MONAD(function (monad, value) {
	if( value === null || value === undefined) {
		monad.is_null = true;
		monad.bind = function () {
			return monad;
		}
	}
})

var monad = maybe(null)
monad.bing(alert)