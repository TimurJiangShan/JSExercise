"use strict";

// function output(txt) {
// 	console.log(txt);
// }

function not(predicate){
	return function(...args){
		return !predicate(...args);
	}
}

function when(fn) {
	return function(predicate){
		return function(...args){
			if (predicate(...args)) {
				return fn(...args);
			}
		};
	};
}


function isShortEnough(str) {
	return str.length <= 5;
}
let output = console.log.bind(console);
let printIf = when(output);
let isLongEnough = not(isShortEnough);


var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World
