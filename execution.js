

// var a = 2;
// var b = 4;

// console.log(addition);

// function addTwoNumber(a,b){

//     var add = a + b ;
//     return add;
// }

// function subTwoNumber(a,b){

//     var sub = b - a ;
//     return sub;
// }

// var addition = addTwoNumber(10,14);
// var subtraction = subTwoNumber(a,b);
// // console.log(addition);
// // console.log(subtraction);


//how to create html elements using javascript

// let body = document.body;
// let div = document.createElement('div');
// div.innerText = 'anuhya';
// body.appendChild('div');


// let strong = document.createElement('stong');
// strong.innerText = 'i am a strong boy';
// div.append(strong);
// div.removeChild(strong);

//getattribute and setattribute
let randomtext = document.querySelector('.randomtext');
console.log(randomtext.getAttribute('class'));

randomtext.setAttribute('id', 'myid');

randomtext.classList.add('myheading');

randomtext.classList.remove('myheading');

randomtext.classList.add('bg-yellow');

randomtext.classList.toggle('myheading');
