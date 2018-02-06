// Tasks 1
 
function red() {
	var mas = document.getElementsByTagName('p');
	for (var i = 0; i < mas.length; i++) {
		mas[i].style.backgroundColor = 'red';
	}
}

// Tasks 2

function shadowImg(){
	var m = document.getElementsByTagName('img');
	for (var i = 0; i < m.length; i++) {
		m[i].style.boxShadow = '3px 3px 3px 3px grey';
	}
}

// Tasks 3

function pNumeration(){
	var num = document.getElementsByTagName('p');
	for (var i = 0; i < num.length; i++){
		num[i].innerHTML = i + 1 + ') ' + num[i].innerHTML;
	}
}

// Task 4 

var number = 0;
var outNumber = document.getElementById('outNumber');
function calc(){
	number++;
	outNumber.innerHTML = number;
}

// Task 5

function power(num, exp){
	alert(Math.pow(num, exp));
}


// task 6

function underline(tag){
	var b = document.getElementsByTagName(tag);
	for (var i = 0; i < b.length; i++) {
		b[i].style.textDecoration = 'underline';
	}
}
// underline('p');

// task 7-8
function ageVerif(age) {
	if ( age >= 16 ) alert( 'Welcome!' );
	else if (age < 16 && age > 0 ) alert( 'You are very young else!' );
	else alert( 'Please enter your age' );
}

// task 9
var mas = [1,2,3,4,5,6,7];
function masLength( mas ) {
	if ( !arguments.length ) alert( 'Error' );
	return mas.length;
}

// task 10
function something( num ) {
	if ( num > 10 ) return num*num;
	else if ( num < 7 ) return "number < 7";
	else if ( num == 9 ) return 8;
	else if ( num == 8 ) return 7;
}


// task 11

var generNum;
var s;
var result = document.getElementById('result');
var checkButton = document.getElementById('checkButton');

function gener() {

	generNum = Math.floor(Math.random() * 10) + 1;
	checkButton.innerHTML = '1/3 Attempt';
	checkButton.onclick = check;
	result.innerHTML = 'Please enter your number';
	i = 1;

}

function check() {
	i++;
	var userNum = parseInt(	document.getElementById('number').value );

	if ( i > 3 && userNum != generNum) {
		result.innerHTML = "You're looser! It was " + generNum;
		checkButton.innerHTML = 'No more attempts';
		checkButton.onclick = function () {};
	}

	else if ( userNum == generNum ) {
		result.innerHTML = 'You won';
		checkButton.onclick = function () {};
	} 

	else if ( userNum > generNum ) {
		result.innerHTML = 'Very big';
		checkButton.innerHTML = i + '/3 Attempt';
	} 

	else if ( userNum < generNum ) {
		result.innerHTML = 'Very small';
		checkButton.innerHTML = i + '/3 Attempt';
	}
}





















