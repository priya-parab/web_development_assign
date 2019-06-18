function validateForm() {
  alert("javascript")
	var missingField = false;
	var strField ="";
	var a = document.getElementById("Email").value;
	var letterNumber = /^[0-9a-zA-Z]+$/;
	var radio1=document.getElementById("residence1").checked;
	var radio2=document.getElementById("residence2").checked;
	var checkBox1=document.getElementById("checkbox_sample18").checked;
	var checkBox2=document.getElementById("checkbox_sample19").checked;
	var checkBox3=document.getElementById("checkbox_sample20").checked;


  if (document.getElementById("firstName").value == "") {
  	
  	missingField = true;
  	strField += "    Please Enter the firstName \n";  
  }

  if (document.getElementById("lastName").value == "") {
  	
  	missingField = true;
  	strField += "    Please Enter the lastName \n";  
  }

  if (document.getElementById("Phone").value == "") {
  	
  	missingField = true;
  	strField += "    Please Enter the Phone Number \n";  
  }

  else if(isNaN(document.getElementById("Phone").value)) {

  	missingField = true;
  	strField += "    Please Enter the Numeric Phone value \n";
  }

  else if ((document.getElementById("Phone").length) != 10) {

  	missingField = true;
  	strField += "    Please Enter the 10 digit Number \n";
  }


  if (document.getElementById("Office").value == "") {
  	
  	missingField = true;
  	strField += "    Please Enter the Office Number \n";  
  }

  else if (isNaN(document.getElementById("Office").value)) {

  	missingField = true;
  	strField += "    Please Enter the Numeric Office No value \n";
  }

  if (document.getElementById("Email").value == "") {
  	
  	missingField = true;
  	strField += "    Please Enter the Email \n";  
  }

  else if ((a.indexOf('@')<=0) || ((a.charAt(a.length-4)!=".") && (a.charAt(a.length-3)!="."))) {
  	
  	missingField = true;
  	strField += "    Please Enter the  Valid Email \n";  
  }

  if (document.getElementById("Password").value == "") {
  	
  	missingField = true;
  	strField += "    Please Enter the Password \n";  
  }

  else if (!(document.getElementById("Password").value).match(letterNumber)) {
  	
  	missingField = true;
  	strField += "    Please Enter the alphanumeric value \n";  
  }

  else if (!((document.getElementById("Password").value.length) >= 8 && (document.getElementById("Password").value.length)<=12)) { 
  	
  	missingField = true;
  	strField += "    Range should be between 8 to 12 charachers \n";  
  }

  if (document.getElementById("Confirm Password").value != document.getElementById("Password").value ) {
  	
  	missingField = true;
  	strField += "    Password does not Match \n";  
  }

  if (document.getElementById("Age").value == "") {
  	
  	missingField = true;
  	strField += "    Please Enter the Age\n";  
  }

  if (radio1 == "" && radio2 =="") {
  	
  	missingField = true;
  	strField += "    Select either Male or Female \n";  
  }

  if (checkBox1 == "" && checkBox2 == "" && checkBox3 == "") {
  	
  	missingField = true;
  	strField += "    Select interest min 1 value \n";  
  }

  if (document.getElementById("Abt").value == "") {
    
    missingField = true;
    strField += "    About you filed is must \n";  
  }

  if( missingField ) {
  	alert("I'm sorry, but you must provide the following fields before continuing:\n" + strField);
  	return false;
  }
  return true;
}

function calculateAge() {
	var year = document.getElementById("year").value;
	var currentYear = new Date().getFullYear();

	var age = currentYear - year;
	document.getElementById("Age").value = age;
}

