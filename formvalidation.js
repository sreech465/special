let registerbtn = document.querySelector('.registerbtn');


    registerbtn.addEventListener('click',function(e){
           e.preventDefault();
    
    

 

 let userName = document.getElementById('username').value;
 let phoneNumber = document.getElementById('phone number').value;

 if(userName == ''){
     document.getElementById('unameerr').innerHTML = 'the username should not be empty';
     document.getElementById('unameerr').style.color = 'red';

 }

 else if((userName.length<3) || (userName.length>20)){
    document.getElementById('unameerr').innerHTML = 'the username should be between 3 and 20';
    document.getElementById('unameerr').style.color = 'red';

 }
 else if(!isNaN(userName)){
    document.getElementById('unameerr').innerHTML = 'the username should not have numbers'; 
    document.getElementById('unameerr').style.color = 'red';

 }

 if(phoneNumber == ''){
     document.getElementById('numerr').innerHTML = 'phone number should not be empty';
     document.getElementById('numerr').style.color = 'red';
 }
 else if(phoneNumber.length>10){
     document.getElementById('numerr').innerHTML = 'phone number length should not be greater than 10';
     document.getElementById('numerr').style.color = 'red';
 }
    
});

