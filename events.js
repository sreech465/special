// const eventls = document.querySelector('.btn');

// eventls.addEventListener('click',function(){
//     alert('button clicked');
// })

// const dhoni = document.querySelector('[data-double-click]');

// dhoni.addEventListener('dblclick' , function(){

//     alert('booing');
// })

// const hover = document.querySelector('.bgcolor');
// hover.addEventListener('mouseover' , function(){
//     hover.style.backgroundColor = 'green' ;
// })

// // hover.addEventListener('mouseleave' , function(){
// //     hover.style.backgroundColor = 'aqua' ;
// // })

 const firstName = document.querySelector('.firstName');
// const secondName = document.querySelector('.secondName');
// firstName.addEventListener('change',function(){
//     console.log(firstName.value);
// });

// secondName.addEventListener('focus',function(){
//     secondName.style.width = '50%';
// })

// secondName.addEventListener('blur',function(){
//     secondName.style.width = '20%';
//     secondName.style.backgroundColor = 'green';
// })

// firstName.addEventListener('input', function(){
//     console.log(firstName.value);
// })

document.addEventListener('keyup', function(event){
    console.log('keyup');
    console.log(event);
})

//page events

 window.addEventListener('resize', function(){

     console.log(window.innerWidth);
     console.log(window.innerHeight);

 });

// window.addEventListener('scroll',function(){
// console.log(window.scrollY);
// });






