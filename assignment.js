
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));




// const str = 'dog';
// const allCombinations = (str1 = '') => {
//    const arr = [];
//    for (let x = 0, y=1; x < str1.length; x++,y++) {
//       arr[x]=str1.substring(x, y);
//    };
//    const combination = [];
//    let temp= "";
//    let len = Math.pow(2, arr.length);
//    for (let i = 0; i < len ; i++){
//       temp= "";
//       for (let j=0;j<arr.length;j++) {
//          if ((i & Math.pow(2,j))){
//             temp += arr[j];
//          }
//       };
//       if (temp !== ""){
//          combination.push(temp);
//       }
//    }
//    return combination;
// };
// console.log(allCombinations(str));


//  function alphabet_order(str)
//   {
// return str.split('').sort().join('');
//    }
//  console.log(alphabet_order("javascript"));


//  var someString = 'aabcbd';



// function find_FirstNotRepeatedChar(str) {
//     var arra1 = str.split('');
//     var result = '';
//     var ctr = 0;
   
//     for (var x = 0; x < arra1.length; x++) {
//       ctr = 0;
   
//       for (var y = 0; y < arra1.length; y++) 
//       {
//         if (arra1[x] === arra1[y]) {
//           ctr+= 1;
//         }
//       }
   
//       if (ctr < 2) {
//         result = arra1[x];
//         break;
//       }
//     }
//     return result;
//   }
//   console.log(find_FirstNotRepeatedChar('cdcdvbebe'));

// let possibleCombinations = (str) =>{
//    let combinations = [];
//      for(let i = 0 ;i < str.length; i++)
//    {
//        for(let j = i + 1; j< str.length + 1; j++)
//        {
//            combinations.push(str.slice(i , j));
//        }
//    }
//   return combinations;
// }
// console.log(possibleCombinations('Dog'));



