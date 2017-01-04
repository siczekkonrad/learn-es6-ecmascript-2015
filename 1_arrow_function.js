//es5
var createGreeting = function(message, name) {
	return message + name;
}

//es6
var arrowGreating = (message, name) => message + name;


//es5
var deliveryBoy = {
	name: "John es5",

	handleMessage: function (message, handler) {
		handler(message);
	},

	receive: function () {
		var that = this;

		this.handleMessage("Hello, ", function (message) {
			that.name;

			console.log(message + that.name);
		})
	}
}

deliveryBoy.receive();


//es6

var deliveryBoyArrow = {
	name: "Jonathan es6",

	handleMessageArr: function (messageArr, handlerArr) {
		handlerArr(messageArr);
	},

	receiveArr: function () {

			this.handleMessageArr("Hello, ", messageArr => console.log(messageArr + this.name));

	}
} 

deliveryBoyArrow.receiveArr();