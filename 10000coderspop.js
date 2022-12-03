var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementsByClassName('closeBtn')[0];

var modal = document.getElementById('simple-modal');


modalBtn.addEventListener('click',openModal);


closeBtn.addEventListener('click',closeModal);

//outside click
window.addEventListener('click',clickOutside);

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}



let registerbtn = document.querySelector('.rgbtn');


    registerbtn.addEventListener('click',function(e){
           e.preventDefault();

           const userName = document.getElementById('vname').value;
const phoneNumber = document.getElementById('fname').value;
const password = document.getElementById('gname').value;

    
    

 if(userName == ''){
     document.getElementById('unameerr').innerHTML = 'the username should not be empty';
     document.getElementById('unameerr').style.color = 'red';

 }

 else if((userName.length<3) || (userName.length>20)){
    document.getElementById('unameerr').innerHTML = 'the username should be between 3 and 20';
    document.getElementById('unameerr').style.color = 'red';

 }
 else if(isNaN(userName)){
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
 if(password == ''){
    document.getElementById('psserr').innerHTML = 'password should not be empty';
    document.getElementById('psserr').style.color = 'red';
}
    
});

// const testInput = function(e){


//     if(e.target.id=='vname'){

//     if(e.target.value == ''){
//         document.getElementById('unameerr').innerHTML = 'please enter a valid username';
//         document.getElementById('unameerr').style.color = 'red';
//         e.target.style.border = '1px solid red';
//     }
//     else{
//         document.getElementById('unameerr').style.display = 'none' ;
//         e.target.style.border = '1px solid green';

//     }
// }
//   if(e.target.id=='fname'){

//     if(e.target.value == ''){
//         document.getElementById('numerr').innerHTML = 'please enter a valid phone number';
//         document.getElementById('numerr').style.color = 'red';
//         e.target.style.border = '1px solid red';
//     }
//     else{
//         document.getElementById('numerr').style.display = 'none' ;
//         e.target.style.border = '1px solid green';

//     }
// }
// if(e.target.id=='gname'){

//     if(e.target.value == ''){
//         document.getElementById('psserr').innerHTML = 'please enter correct password';
//         document.getElementById('psserr').style.color = 'red';
//         e.target.style.border = '1px solid red';
//     }
//     else{
//         document.getElementById('psserr').style.display = 'none' ;
//         e.target.style.border = '1px solid green';

//     }
// }

// };

// document.getElementById('vname').addEventListener('blur',testInput);
// document.getElementById('fname').addEventListener('blur',testInput);
// document.getElementById('gname').addEventListener('blur',testInput);


