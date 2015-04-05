var balance = 150;
var pin = 1234;

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
