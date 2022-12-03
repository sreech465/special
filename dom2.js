//how to create html elements using javascript

let body = document.body ;
let div = document.createElement('div');

div.innerText = "division1";

body.appendChild(div);

let strong = document.createElement('strong');
strong.innerText = 'badcow';
 body.appendChild(strong);

 div.remove();

 //get attribute and set attribute

 var randomtext = document.querySelector('.randomtext');
 console.log(randomtext.getAttribute('randomtext'));

 randomtext.setAttribute('id','dinesh');
 
 randomtext.classList.add('work');