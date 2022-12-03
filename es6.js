let s = [2,3,4]


for (let i in s) {
  
    // Prints all the keys in
    // obj1 on the console
    console.log(i);
}
let student1 = [2,3,4]

    // Iterating over all properties of
    // student1 object
    for (let prop in student1) {
        console.log(prop + " -> " 
            + student1[prop]);
    }

  let  person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
  text += person[x] + " ";
}

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text1 = "";
for (let x in cars) {
  text1 += cars[x] + " ";
}



let text5 = "";
const cars1 = ['BMW', 'Volvo', 'Mini'];
for (let x of cars1) {
  text5 += x + " ";
}


let text6 = "JavaScript";
for (let x of text6) {
  text6 += x + " ";
}

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}


const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}


const iterable1 = [10, 20, 30];

for (let value of iterable1) {
  value += 1;
  console.log(value);
}

const iterable2 = 'boo';

for (const value of iterable2) {
  console.log(value);
}

let a, b, rest;
[a, b] = [10, 20];

console.log(a);


console.log(b);


[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);


const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); 
console.log(z);


const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); 
console.log(yellow); 
console.log(green); 


const user = {
    id: 42,
    isVerified: true
};

const {id, isVerified} = user;

console.log(id);
console.log(isVerified)

const o = {p: 42, q: true};
const {p: fook, q: bar} = o;

console.log(fook); 
console.log(bar);

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.dog?.name;
  console.log(dogName);
  // expected output: undefined
  
  console.log(adventurer.someNonExistentMethod?.());


  let customer1 = {
    name: "Carl",
    details: { age: 82 }
  };
  const customerCity1 = customer1?.city ?? "Unknown city";
  console.log(customerCity1);

  let customer = {
    name: "Carl",
    details: {
      age: 82,
      location: "Paradise Falls" // detailed address is unknown
    }
  };
  let customerCity = customer.details?.address?.city;
  
  // … this also works with optional chaining function call
  let customerName = customer.name?.getName?.(); 

  let customer8 = {
    name: "Carl",
    details: { age: 82 }
  };
  const customerCity6 = customer8?.city ?? "Unknown city";
  console.log(customerCity); 

  let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];


const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };
const merge = (...objects) => objects.reduce((acc, cur) => ({ ...acc, ...cur }));

const mergedObj1 = merge(obj1, obj2);
console.log(mergedObj1);

