// Reverse an array

function reverse(arr) {
	const myArray = [];
	for(let i = arr.length - 1; i >= 0; i--){
		myArray.push(arr[i]);
	}
	return myArray;
}

function reverse(arr) {
	return arr.reverse();
}