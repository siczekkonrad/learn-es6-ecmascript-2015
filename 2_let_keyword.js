//es5 
var fs5 = [];

for(var i = 0; i < 10; i++) {
	fs5.push( function () {
			console.log("es5 ",i);
	});
}

fs5.forEach( function (f) {
	f();
})

//es6

var fs6 = [];

for(let i = 0; i < 10; i++) {
	fs6.push(function () {
			console.log("es6 ",i);
	})
} 

fs6.forEach( function(fa) {
	fa();
})


