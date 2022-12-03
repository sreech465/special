// const xhr = new XMLHttpRequest();
// //open the request
// console.log(xhr);

// xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);

// xhr.onload = function(){
//     if(xhr.status==200 && xhr.readyState==4){
//         console.log(xhr.responseText);
//     }
// }

// xhr.send();

const home = document.querySelector('.home');
const about = document.querySelector('.about');
const placements = document.querySelector('.placements');
const register = document.querySelector('.register');
const result = document.getElementById('result');

home.addEventListener('click',()=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','./home.html',true);

    xhr.onload = function(){
        if(xhr.status==200 && xhr.readyState==4){
            result.innerHTML= xhr.responseText;
        }
    }
    
    xhr.send();

});
