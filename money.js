var balance = 30;

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
