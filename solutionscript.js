var results1 = [0,0,0];

function validateName(){
	var letters = /^[A-Za-z]+$/;  
	var name = document.getElementById('name').value;
	if(name.replace(/ /g,'').match(letters)) {
		results1[0] = 1;
		alert("validateName Success");
		return true;
	}
	else{
		results1[0] = 0;
		alert("Only Characters/Spaces are allowed");  
		return false;  
	}   
};
function allowNumbersOnly(e) {
	var key,keychar;
	if (window.event) {
		key = window.event.keyCode;
	}
	keychar = String.fromCharCode(key);
	if ((key==null) || (key==0) || (key==8) ||  (key==9) || (key==13) || (key==27) ) {
		return true;
	}
	else if ((("0123456789").indexOf(keychar) > -1)) {
		return true;
	}
	else
		return false;
};
function validateNumbers(){
	var number = document.getElementById('number').value;
	if(number != ''){
		if(number.length >10 || number.length <10 ){
			results1[1] = 0;
			alert("Number should not exceed or lessthan 10 digits");
		}else{
			results1[1] = 1;
			alert("validateNumbers Success");
			return true;
		}
	}else{
		results1[1] = 0;
		alert("Enter some digits..!")
	}
};

/*
The email address must have @ character
The email address must have .(dot) character
There must be at lease 3 characters between @ and .(dot)

*/
function validateEmail(){
	var email=document.getElementById('email').value;
	if(email != ''){
		var x=email.indexOf('@');
		var y=email.lastIndexOf('.');
		var count =0;
		for(var i=0; i<=email.length; i++){
			if(email[i] == '@') count++;
		}
		if(count >1 || x==-1 || y==-1 || (x+3)>=y){
			results1[2] = 0;
			alert('Email address is not valid');
		}
		else{
			results1[2] = 1;
			alert('validateEmail Success');
		}
	}else{
		results1[2] = 0;
		alert("Enter email address..!")
	}
	
};

function validate1(){
	validateName();
	validateNumbers();
	validateEmail();
	for(var i=0; i<results1.length; i++){
		if(results1[i] == 0){
			alert("validation Failed");
			return false;
		}
	}
	alert("validations Verified");
	return true;
}



function reverseString(str){
	var x = [];
	for(var i=0;i<str.length-1;i++){
		x.push(str[i]);
	}
	return x.reverse().join('');
}

function reverseSentence(sentence){
	var x = sentence.split(' ');
	return x.reverse().join(' ');
}

function isPrime(value) {
	for (var c = 2; c <= Math.sqrt(value); ++c){
		if (value % c === 0){
			return false;	
		}
	}
	return true;
}

function primeList(array) {
	var res = [];
	for(var k =0; k< array.length; k++){
		console.log(k + "=="+array[k]);
		if (isPrime(array[k])){
			res.push(array[k]);	
		}
		
	}
	return res;
}