//es5
function receive5(complete5 = function() {
		console.log("complete5")
}) {
	complete5();
}

receive5();

//es6
let receive6 = (complete6 = () => console.log("complete6")) => complete6()

receive6();