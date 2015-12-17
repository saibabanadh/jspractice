var results1 = [0,0,0];

function validateName(){
    var name = document.getElementById('name').value;




};
function allowNumbersOnly(e) {
    
};
function validateNumbers(){
    var number = document.getElementById('number').value;
    
};

/*
The email address must have @ character
The email address must have .(dot) character
There must be at lease 3 characters between @ and .(dot)

*/
function validateEmail(){
    var email=document.getElementById('email').value;
    
    
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

