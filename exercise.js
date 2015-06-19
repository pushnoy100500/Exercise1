//question 1
var name = "Rob";
//question 2
var greeting = "Hello " + name;
//question 3
var success = true && false && !true;
//question 4
function logString(brainstation) {
	console.log(brainstation);
}
//question 5
logString("Hello");
//question 6
function sayHello(name) {
	console.log('Hello ' + name);
}
satHello('Igor');
//question 7
function checkBool(a, b) {
	return a || b;
}
checkBool(true, false);
//question 8
	//we use git to be able to come to come back to any commit that we did before, and to have different verions of the project 
	// to work on. Also not to interfere with other developers. Git is very usefull, that's why we use it
//question 9
function getPath(value) {
	if(value >= 2) {
		console.log('Pass');
	} else {
		console.log('Fails');
	}
}
//question 10
for(var i = 0; i < 12; i++) {
	console.log('Hello world');
}
//question 11
var myNumbers = [0, 1, 2, 3, 4, 5];
//question 12
var sum = 0;
for(var i = 0; i < myNumbers.length; i++) {
	sum += myNumber[i];
}
console.log(sum);
//question 13
for(var i = 12; i <= 55; i++) {
	myNumbers.push(i);
}
//question 14
function Person(name, address) {
	this.name = name;
	this.address = address;
}
var human = new Person("Chuck Norris", "Universe");
//question 15
function Computer(memory, screenSize) {
	this.memory = memory;
	this.screenSize = screenSize;
	this.turnOn = function() {
		console.log('Powering up');
	}
}
//question 16
var pc = new Computer(16, 24);
pc.turnOn();
//question 17
function ComputerStore(name, address) {
	this.name = name;
	this.address = address;
	this.makeComputer = function(memory, screenSize) {
		return new Computer(memory, screenSize);
	}
}
