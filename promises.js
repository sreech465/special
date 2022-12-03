// const p = new Promise(function(resolve,reject){
//     let a = 5;
//     if(a==10){

//         resolve('you got the data');
//     } else{

//         reject('you got the data wrong');
//     }

// });


// p.then(function(message){
//     console.log(message);

// }).catch(function(message){
//     console.log(message);

// });

//fetch method

// let response = fetch('https://fakestoreapi.com/products');

// const data = response.json();
// console.log(data);



// fetch('https://fakestoreapi.com/products').then(function(res){

// console.log(res.json());
// })

const getThedata = async function(){
    const data = await fetch('https://fakestoreapi.com/products');
    const data1 = await data.json();
    console.log(data1);

}

getThedata();
