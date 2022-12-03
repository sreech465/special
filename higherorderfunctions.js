// function x(){
//     console.log('welcome to 10000 coders');
// }

// function y(x){
//     x();
// }
// y(x);

const radius = [3,1,2,4];
// const calculatearea = function(radius){
//     const output = [];
//     for(let i=0 ; i<radius.length ; i++){
//            output.push(Math.PI*radius[i]*radius[i])
//     }
//     return output;
// }
// console.log(calculatearea(radius));

// // const circumference = function(radius){
// //     const output = [];
// //     for(let i=0 ; i<radius.length ; i++){
// //            output.push(2*Math.PI*radius[i]);
// //     }
// //     return output;
// // }
// // console.log(circumference(radius));

// // const diameter = function(radius){
// //     const output = [];
// //     for(let i=0 ; i<radius.length ; i++){
// //            output.push(2*radius[i]);
// //     }
// //     return output;
// // }
// // console.log(diameter(radius));
// // 

// const area = function(radius){
//     return Math.PI * radius * radius;
// }
// const circumference = function(radius){
//     return 2*Math.PI*radius;
// }
// const diameter = function(radius){
//     return 2*radius;
// }
// const calculate = function(radius,logic){
//     const output = [];
//     for(let i=0 ; i<radius.length ; i++){
//            output.push(logic(radius[i]))
//     }
//     return output;
// }
// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));
// console.log(radius.map(area));
// console.log(radius.map(circumference));
// console.log(radius.map(diameter));

const radius1 = [3,1,2,4];
const returnMap = radius1.map((ele)=>{
    return ele*2;
});
console.log(returnMap);



const returnMa = radius.forEach((ele)=>{
    return ele*2;
});
console.log(returnMa);


