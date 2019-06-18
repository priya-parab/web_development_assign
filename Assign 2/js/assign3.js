$(document).ready(function(){
  alert('jquery')
  $('#submit').click(function(){
    alert('jquery')
    $(".A").html(" ")
      var firstname = $('#firstName').val();
      var lastname = $('#lastName').val();
      var Phone = $('#Phone').val();
      var Office = $('#Office').val();
      var Email = $('#Email').val();
      var Password = $('#Password').val();
      var comPassword = $('#ConfirmPassword').val();
      var Age = $('#Age').val();
      var About_you= $('#About_you').val();
      var count =true;
      var r1=$("input[name ='gender']:checked").val();
      var checkBox1=$("input[name ='Interest']:checked").val();
      var letterNumber = /^[0-9a-zA-Z]+$/;
    
     
      if(firstname == ""){
        $('#FN_error').html('**The firstname must be filled.');
        $('#FN_error').css('color','red');
        count = false;
      }

      if(lastname == ""){
        $('#LN_error').html('**The lastname must be filled.');
        $('#LN_error').css('color','red');
        count = false;
      }

      if(Phone == ""){
        $('#phone_error').html('**The Phone must be filled.');
        $('#phone_error').css('color','red');
        count = false;
      }
      
      if(Phone) {
        if (isNaN(Phone) && Phone.length != 10 ) {
          $('#NumericPhone_error').html('**Please Enter the 10 digits  Numeric Phone values.');
          $('#NumericPhone_error').css('color','red');
          count = false;
        }
      }  

      if(Office == ""){
        $('#office_error').html('**The Office Nummber must be filled.');
        $('#office_error').css('color','red');
        count = false;
      }

      else if (isNaN(Office)) {
        $('#NumericOffice_error').html('**Please Enter the Numeric Office No.');
        $('#NumericOffice_error').css('color','red');
        count = false;
      }

      if(Password == ""){
        $('#password_error').html('**The Password must be filled.');
        $('#password_error').css('color','red');
        count = false;  
      }

      else if(Password.length < 8 || Password.length > 12 || !Password.match(letterNumber)){
          $('#passwordAlphaNum_error').html('**The Password must be alphaNumeric Between 8 to 12 charaters.');
          $('#passwordAlphaNum_error').css('color','red');
          count = false;      
        } 

      if(comPassword == ""){
        $('#compassword_error').html('**The Confirm Password must be filled.');
        $('#compassword_error').css('color','red');
        count = false;
      } 

      else if(comPassword != Password){
        $('#compassword_error').html('**The Password does not match.');
        $('#compassword_error').css('color','red');
        count = false;
      }   

      
      if(Email == "") { 
        $('#email_error').html('**The Email must be filled.');
        $('#email_error').css('color','red');
        count = false;
      }
      else if ((Email.indexOf('@')<=0) || ((Email.charAt(Email.length-4)!=".") && (Email.charAt(Email.length-3)!="."))) {
        $('#email_error').html('**Please Enter Valid Email.');
        $('#email_error').css('color','red');
        count = false;
      }

      if(Age == ""){
        $('#Age_error').html('**Please select the birth date.');
        $('#Age_error').css('color','red');
        count = false;
      }

      if (!r1) {
         $('#Gender_error').html('**Select either Male or Female.');
         $('#Gender_error').css('color','red');
         count = false;
      }

     if (!checkBox1) {
        $('#Interest_error').html('**Select atleast 1 minimum Interest.');
        $('#Interest_error').css('color','red');
         count = false;
      }
      if(About_you == ""){
        $('#Abouterror').html('**The About you must be filled.');
        $('#Abouterror').css('color','red');
        count = false;
      }

      if (count) {
        return true;
      }
      else {
        return false;
      }
      
  });
});
function calculateAge() {
  var year = document.getElementById("year").value;
  var currentYear = new Date().getFullYear();

  var age = currentYear - year;
  document.getElementById("Age").value = age;
}