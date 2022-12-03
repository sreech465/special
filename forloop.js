// //square star pattern in javascript

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     string += "*";
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);

// //hollow square star pattern

// let h = 5; // row or column count
// // defining an empty string
// let string1 = "";

// for(let i = 0; i < h; i++) { // external loop
//   for(let j = 0; j < h; j++) { // internal loop
//     if(i === 0 || i === h - 1) {
//       string1 += "*";
//     }
//     else {
//       if(j === 0 || j === h - 1) {
//         string1 += "*";
//       }
//       else {
//         string1 += " ";
//       }
//     }
//   }
//   // newline after each row
//   string1 += "\n";
// }
// // printing the string
// console.log(string1);

// //right triangle pattern in javascript

// let m = 5;
// let string2 = "";
// for (let i = 1; i <= m; i++) {
//   // printing spaces
//   for (let j = 0; j < m - i; j++) {
//     string2 += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string2 += "*";
//   }
//   string2 += "\n";

// }
// console.log(string2);

// // //downward triangle star pattern

// // let l = 5;
// // let string10 = "";
// // for (let i = 0; i < l; i++) {
// //   // printing star
// //   for (let k = 0; k < l - i; k++) {
// //     string10 += "*";
// //   }
// //   string10 += "\n";
// // }
// // console.log(string10);

// // //hollow triangle star pattern

// // // let a = 6;
// // // let string9 = "";

// // // for (let i = 1; i <= a; i++) {
// // //   // printing star
// // //   for (let j = 0; j < i; j++) {
// // //     if(i === a) {
// // //       string9 += "*";
// // //     }
// // //     else {
// // //       if (j == 0 || j == i - 1) {
// // //         string9 += "*";
// // //       }
// // //       else {
// // //         string9 += " ";
// // //       }
// // //     }
// // //   }
// // //   string += "\n";
// // // }
// // // console.log(string9);
// let n = 6;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   // printing star
//   for (let j = 0; j < i; j++) {
//     if(i === n) {
//       string += "*";
//     }
//     else {
//       if (j == 0 || j == i - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);

//heart star pattern

var n = 6;
var str = "";
for (let i = n / 2; i < n; i += 2) {
  // print first spaces
  for (let j = 1; j < n - i; j += 2) {
    str += " ";
  }
  // print first stars
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  // print second spaces
  for (let j = 1; j < n - i + 1; j++) {
    str += " ";
  }
  // print second stars
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  str += "\n";
}
// lower part
// inverted pyramid
for (let i = n; i > 0; i--) {
  for (let j = 0; j < n - i; j++) {
    str += " ";
  }
  for (let j = 1; j < i * 2; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
//left pascal pattern

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
