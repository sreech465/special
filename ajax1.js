const xhr = new XMLHttpRequest();
//open the request
console.log(xhr);

xhr.open('GET','https://fakestoreapi.com/products',true);

xhr.onload = function(){
    if(xhr.status==200 && xhr.readyState==4){
        console.log(xhr.responseText);
    }
}

xhr.send();


 fetch('https://fakestoreapi.com/products').then(function(res){
     console.log(res);
    res.json().then(function(data){
        console.log(data);
    });
 });


 const getThedata = async function(){

    const data = await fetch('https://fakestoreapi.com/products');
    const response = await data.json();
    console.log(response);

 }
 getThedata();

 const xml = document.querySelector('.xml');
const promise = document.querySelector('.promise');
const async = document.querySelector('.async');
const result = document.getElementById("result");



xml.addEventListener('click',()=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://fakestoreapi.com/products',true);
   
    xhr.onload = function(){
        if(xhr.status==200 && xhr.readyState==4){
            console.log(xhr.responseText);
            result.innerHTML=xhr.responseText;
            
         
          
        }
    }
    
    xhr.send();
    

});

promise.addEventListener('click',()=>{
    fetch('https://fakestoreapi.com/products').then(function(res){
     console.log(res);
    res.json().then(function(data){
        result.innerHTML=data;
        console.log(data.id);
    });
 });

});

async.addEventListener('click',()=>{

    const getThedata = async function(){

        const data = await fetch('https://fakestoreapi.com/products');
        const response = await data.json();
        result.innerHTML = response;
    
     }
     getThedata();

})
