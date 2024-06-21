// console.log(1)
// console.log(2)
// API function // Takes 5 mins to execute
// console.log(3)

// function hello()
// {
//     console.log("hello")
// }

// setTimeout(hello, 2000) // 2 sec = 2000milliseconds

// console.log(1)
// console.log(2)
// setTimeout(() => {
//     console.log("hello");
// }, 4000);
// console.log(3)
// console.log(4)

// function sum(a,b) {
//     console.log(a+b);
// }

// function calculator(a,b, sumCallback) {
//     sumCallback(a,b);
// }

// calculator(3,5,sum);

//    function calculator(a,b, sumCallback) {
//        sumCallback(a,b);
//    }

//    calculator(3,5,(a,b)=>{
//     console.log(a+b);
//    });

// const hello =() => {
//   console.log("hello");
// }

// setTimeout(hello, 3000);

// function getData(dataId) {
//     setTimeout(()=>{
//         console.log("data", dataId);  
//     }, 2000);
// }

// getData(1);
// getData(2);
// getData(3);

// function getData(dataId, getNextData) {
//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1,()=>{
//     console.log("getting data 2...")
//     getData(2, ()=>{
//         console.log("getting data 3...")
//         getData(3, ()=>{
//             console.log("get data 4...");
//             getData(4);
//         });
//     });
// });


//Promise

// let promise = new Promise((resolve, reject)=>{
//   console.log("I am a promise");
// })

// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     resolve("success");
//   })

// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     reject("some error");
//   })

// function getData(dataId) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//         }, 5000);
//     })
// }

// let promise = getData(123);
// console.log(promise);

//.then method
// const getPromise = () => {
//       return new Promise((resolve, reject) =>{
//         console.log("I am a promise");
//         // resolve("success");
//         reject("error");
//       })
// }

// let promise = getPromise();

// console.log(promise);

// promise.then(()=>{
//    console.log("promise fulfilled");
// });


// .catch method
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("success");
//         reject("error");
//     })
// }

// let promise = getPromise();

// promise.catch((err) => {
//     console.log("promise rejected", err);
// });

//Without using Promise chaining

// function asyncFunction1() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     })
// }

// function asyncFunction2() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     })
// }

// console.log("Fetching data1...")
// let p1 = asyncFunction1();
// p1.then((res)=>{
//    console.log(res);
// })

// console.log("Fetching data2...")
// let p2 = asyncFunction2();
// p2.then((res)=>{
//    console.log(res);
// })

//Using promise chaining

// function asyncFunction1() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     })
// }

// function asyncFunction2() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     })
// }

// console.log("Fetching data1...")
// let p1 = asyncFunction1();
// p1.then((res)=>{
//    console.log(res);
//    console.log("Fetching data2...")
//    let p2 = asyncFunction2();
//    p2.then((res)=>{
//       console.log(res);
//    });
// });

//WAY-1
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     })
// }
// let promise1 = getData(1);
// promise1.then((res) => {
//     console.log(res);
//     let promise2 = getData(2);
//     promise2.then((res) => {
//         console.log(res);
//     })
// })

//WAY-2
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     })
// }

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     })
// })

//WAY-3
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     })
// }

// getData(1).then((res) => {
//         return getData(2)
// }).then((res) => {
//         return getData(3);
// }).then((res)=>{
//     console.log(res);
// });

// async-await
// async function hello() {
//     console.log("hello Lewis");
// }

// hello();

// function api() {
//     return new Promise((resolve, reject)=>{
//       setTimeout(() => {
//         console.log("weather data");
//         resolve(200);
//       }, 2000);
//     });
// }

// async function getWeatherData()
// {
//     await api();
//     await api();
// }

// getWeatherData();

// function api() {
//     return new Promise((resolve, reject) => {
//         console.log("weather data");
//         resolve(200);
//     });

// }

// async function getWeatherData() {
//     await api();
//     await api();
// }

// getWeatherData();

//Async-await

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     })
// }

// async function getAllData() {
//     console.log("getting data 1...");
//     await getData(1);
//     console.log("getting data 2...");
//     await getData(2);
//     console.log("getting data 3...");
//     await getData(3);
//     console.log("getting data 4...");
//     await getData(4);
//     console.log("getting data 5...");
//     await getData(5);   
// }

// getAllData();

function getData(dataId) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
       }, 2000);
    })
  }

  (async function ()  {
    console.log("getting data 1...");
    await getData(1);
    console.log("getting data 2...");
    await getData(2);
    console.log("getting data 3...");
    await getData(3);  
  })();

