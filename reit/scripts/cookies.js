function updateCookie(name, value){
	document.cookie = name + "=" + value;
}

function readCookie(name){
	var cookies = document.cookie;
	
	cookies = cookies.split(";");
	
	var len = cookies.length;
	
	for(i = 0; i < len; i++){
		var cook = cookies[i].split("=");
		if(cook[0].trim() == name)
			return cook[1];
	}
	return "VOID";
}

function hasCookie(name){
	if(readCookie(name) == "VOID")
		return false;
	else
		return true;
}

function deleteCookie(name){
	if(hasCookie(name))
		return;
	
	var expdt = new Date(1970,2,1,0,0,0);
	
	document.cookie = name + "=whatever; expires=" + expdt.toUTCString();
}
