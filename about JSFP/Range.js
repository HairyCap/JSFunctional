function *main(max = 8){
	for (var i = 0; max >= i; i++) {
		yield i
	}
}



const range = (a) => [...main(a)]
const b = range(100)
console.log(b)


for (let v of main(19)){
	console.log(v)
}
