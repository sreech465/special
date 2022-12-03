let heading = document.getElementById("my-heading");

heading.innerText="i am a disco dancer";

heading.className='dog';

heading.style.backgroundColor="pink";

let items = document.getElementsByClassName('item');

console.log(items);

let firstitem = items[0];
 
firstitem.style.color="green";

let logo = document.querySelector('.logo');
logo.style.backgroundColor="pink";

let item = document.querySelectorAll('.item');
console.log(item);
for(let i=0;i<item.length;i++){
    item[i].style.color='green';
}


