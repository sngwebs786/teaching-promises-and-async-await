//////////// Promises

// // console.log("hey")
// var a = 6,
//   b = 0,
//   c;

// const myPromise = () => {
//   return new Promise(function (resolve, reject) {
//     c = a / b;
//     if(b!=0){
//       resolve()
//     }
//     else{
//       reject()
//     }
//   });
// };

// console.log(myPromise().then())

///////// Async await

// console.log("First line");
// var a;
// console.log("Value of a outside the function: ", a);
// const func1 = () => {
//   console.log("Hello from func 1");
//   a = 5;
//   console.log("Value of a inside the function: ", a);

//    setTimeout(() => {
//     console.log("HEllo from set time out ");
//     a=10;
//   }, 2000);

//   console.log("Value of A after set time out: ",a)
// };

// func1();

// console.log("Last line of code");
//   console.log("Value of A at the end: ", a);



// var data;
// const callApi = async () => {
//   console.log("Call api function working...");
//   await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => {
//       // console.log(json)
//       data = json;
//       // console.log("Data: ",data)
//     });

//   console.log("The value of data is: ", data);
//   console.log("End of function");
// };

// callApi();

// console.log("End of code")

axios.get("hdaskjdhsakjdhsk").then((res)=>console.log(res.body))

// npm i axios 



