var balance = 150;
var pin = 1234;
var enteredPin = "";
var pinChars = 0;

function printBalance(){
	var output = balance;
	if(balance - Math.floor(balance) == 0)
		output = balance + ".00";
	document.getElementById("balance").innerHTML = output;
}

function addToBalanceBlind(value){
	balance += value;
}

function addToBalance(value){
	if(value >= 0 || -1 * value <= balance)
		balance += value;
}

function checkEnteredPin(){
	if(enteredPin == pin)
		return true;
	else
		return false;
}

function resetEnteredPin(){
	enteredPin = "";
	pinChars = 0;
	printPinChars();
}

function addToEnteredPin(number){
	if(pinChars >= 4)
		return;
		
	if(enteredPin == "&nbsp;")
		enteredPin = number;
	else
		enteredPin += "" + number;
		
	pinChars++;
	printPinChars();
}

function printPinChars(){
	var output = "";
	var i;
	
	for(i = 0; i < pinChars; i++){
		output += "*";
		if(i != pinChars - 1)
			output += " ";
	}
	
	if(output == "")
		output = "&nbsp;";
	
	document.getElementById("pin_space").innerHTML = output;
}
