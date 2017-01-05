function Store () {
	var aisle = {
		fruit: [],
		vegatalbe: []
	}

	return {
		//Store().add('category','item1','item2');
		add: function (category, ...items) {
			//var items = [].split.call(arguments,1);
			console.log(items);
			items.forEach(function(value, index, array) {
				aisle[category].push(value);
			});
		},
		aisle: aisle
	}
}


var myGroceryStore = new Store();

myGroceryStore.add('fruit', 'apples', 'oranges');
console.log(myGroceryStore.aisle);