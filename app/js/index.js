// /* styling */
// require('styles/main.scss');
// import { call } from 'file-loader';
// /* js */
// import $ from 'jquery';
// import { log, logTitle } from 'logger';
// /* your imports */
// //default import are see in case of class and obj. exports/import single value
// import Animal from './Animal';
// //always add import on top
// //import * as Math from './math' // this imports all
// import {add} from './math'; // import only add
// logTitle('Title')
// /* coding examples */
import { coroutine as co} from "bluebird";

//Generators with Promise - avoids call back

//Bitcoin API - Using gnerators with promise
//no need to do .then() to received output from a promise
// it will be stored in var like simply storing int a =2;
//then only we need to invoke it
const generatorWithPromise = co(function*(){
    const bcAPI = yield fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const outputAPI = yield bcAPI.json();
    return outputAPI;
})

generatorWithPromise().then(resp =>{
    console.log(resp.bpi.USD.rate_float);
}).catch(error => console.log(error))

//Generators

const numberGenerator = function* (){
     yield 'shisab';
     yield 2021;
}
const generatorVar= numberGenerator();

console.log('Genetor -> '+ generatorVar.next().value);

console.log('Genetor Year -> '+ generatorVar.next().value);










//------END GENERATORS














// //-------FETCH API

// //three steps
// //1st -> fetch() - to hit the API 
// //2nd ---> convert the JSON response received from API to JS Obj using .json() 
// //3rd -----> Finally, if you want to parse the OBJ to JSON -> JSON.stringify()




//Apply for each loop and obj destruction tomorrow sunday NOV 1st
//BICOIN API
const bitcoinAPI = fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
//console.log(` BITCOIN _________-------___> ${bitcoinAPI}`);
bitcoinAPI.then(response =>{
    response.json().then(res =>{
        console.log('-------DATA FROM BITCOIN API--------')
         //const bitcoinRateNow =JSON.stringify(res.bpi.USD.rate_float);
        //console.log(`Bitcoin price today: $${bitcoinRateNow}`)
        const {bpi : { USD: {rate_float: bitcoinRateNow}}  }= res; //same thing as above but using obj destructuring
        console.log(`Bitcoin price today: $${bitcoinRateNow}`)
        console.log('-------END OF BITCOIN API DATA--------')
       
    })
})
//END OF BITCOIN API






// const fetchAPIPractice = n => {
//     //API to get random user details
//     const varForFetch = fetch(`https://randomuser.me/api/?results=${n}`);
//     console.log("1) variable output for fetch : "+varForFetch);
    
//    // varForFetch.then ( data => console.log("2 -> inside .then of FETCH "+data.json()) );
//     varForFetch.then ( data => 
//    // console.log("type of data "+ typeof data + "---type of data.json "+ data.json())

//    //data.json() - converts JSON into java obj and returns a new Promise
//       data.json().then(data=>{
//             console.log("Type of Fetch ---------->" +typeof data);
//             console.log(JSON.stringify(data));  //converts obj to JSON(String)
//         }) 
//         );
// }

// fetchAPIPractice(10);











// ///---------END OF FETCH API












// //Array Destruction

// const foodList = ['Momo', 'DaalBhaat', 'Masu', 'Anda'];
// console.log( "is foodList Array -> " + Array.isArray(foodList) );
// //traditional way
// const firstFav = foodList[0];
// const secondFav = foodList[1];
// const thridFav = foodList[2];

// //Instead of using three lines of code as above 
// //use ArrayDesctruction

// const [fFav, sFav, tFav]  = foodList;  //fFav = foodList[0] and foodlist = where the list comes from
// console.log("first fav: " + fFav);

// //---------END OF Array Destruction

// //-----PROMISE.ALL
// //In promise.all, all promise must be fulfilled or it will error out
// const userFirstName = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve(['Sawa','Anita','Kamal','Nischal'])
//     },3000);

//     setTimeout( () => {reject('Data not found, Error 404_1')},5000);
// })

// const userLastName = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve(['Mali Singh','Singh','Singh','Singh'])
//     },3000);
//     setTimeout( () => {reject('Data not found, Error 404_@@@@_2')},5000);
// })

// Promise.all([userFirstName,userLastName]).then((data) => {
   
//    const [firstName, lastName] = data;
//    for (let i = 0; i < firstName.length; i++) {
//        const output = firstName[i];
//        const output2 = lastName[i];
//        log(output + ' ' + output2);
       
//    }
// }).catch(error => console.log(error));


// //----------END OF promise.all

// //----------Promise chaining
// var firstPromise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(1)
//     },2000)
// }).then(function(result) {
//    return result * 1;
// }).then(function(result) {
//     return result * 2
// }).then(function(result) {
//     return result * 3;
// })

// console.log(firstPromise);

// //---------END PROMISE CHAINING


// //Before:  var promise4 = new Promise(function (resolve, reject) {})
// //same code After:
// //note: We cannot use .message method unless we use new Error();
// var promise4 = Promise.reject(new Error('@@@@@@@Unable to fetch data from server !'));
// promise4.catch(error => console.log(error.message));

// //doing below code(promise3) in much easier way
// var promise5 = Promise.reject('@@##!!!!! _I DID NOT FIRE');
// promise5.catch(error => console.log(error));

// //rejecting in promise through the second parameter
// //of .then function
// var promise3 = new Promise(function(resolve, reject) {
//     resolve('I Fired')
//     reject('I DID NOT FIRE')
// })
// function onReject3(error) {
//     console.log(error.message);
//   }

// promise3.then(console.log,onReject3);

// //------------------------------------------------------------------------------
// // Promise are always asynchronous
// //Basically, the point is that the promise's then handler will not
// // run before the current flow of code has finished executing 
// // This shows you that despite the promise being resolved synchronously, the
// // provided function is not executed until the next turn of the event loop.

// var promise4 = new Promise(function (resolve, reject) {
//     resolve('PROMISE VALUE....');
   
// })

// promise4.then(console.log);
// console.log('MAIN PROGRAM');





// var promises = new Promise( (resolve, reject) =>{
//     setTimeout( ()=> {
//         resolve('FULFILLED');
//     },200);

//     setTimeout(() => {
//         reject('REJECTEDzzzz');
//     },300);
// })

// promises.then(resolve => {
//     console.log(resolve);
// }).catch(err => {console.log(err);});

// //error.message 'message' property is used to return error msg
// //in detail
// var promise2 = new Promise( (fulfill, reject) =>{

//     setTimeout( () =>{
//       reject(new Error('REJECTED,,!'));
//     }, 300);
//   });
  
 
//   function onReject(error) {
//     console.log(error.message);
//   }
  
//   promise2.then(null, onReject);



// //Promise --------

// const promise = new Promise( (resolve, reject) =>{
//     //setTimeout takes callback function -> resolve,reject
//     //i.e. resolve('value_inserted') = promise.then('value_inserted')
//     //think of it as "resolve" is the name of the function which is 
//     setTimeout(() =>{
//         resolve('TIMED OUT!')
//     },3000);

//     setTimeout(() => {
//        reject('try again. server is down') 
//     }, 2000);
// })
// promise.then(response => {
//     console.log(response);
// }).catch((err) => {console.log(err);})

// promise.then

// //---callback function revisions --------------------------------

// //func passed as parameter
// // function practiceCallbacks(day,time,taskFunction){
// //    taskFunction(day,time);
// // }
// // function callbacksss(day,time){
// //     log(`today is ${day}, time : ${time} and your task is to code`);
// // }

// // practiceCallbacks('sunday',12,callbacksss);


// //mimicking how it is used in promise
// function practiceCallbacks(taskFunction){
//    console.log(taskFunction('tuesday'));
// }


// practiceCallbacks((x)=>"today is "+ x);


// //-------Classes 
// class Animals{
//     constructor(name, age){ //constructor only get invoke one when we create instance / create obj of our class
//         log('constructor getting invoked from Animal Class')
//         this.name = name;
//         this.age = age;
//     }
//     eat(){ log(`Dog name is : _${this.name} and he is eating`)};
//     play(){ log(`${this.name} likes to play only in the morning `)};
// }

// //creating instance of class
// //common practice to create object with const var
// const dog = new Animals('appa',1);
// dog.eat();
// dog.play();

// const newDog = new Animals('Oggie',10);
// newDog.eat();
// newDog.play();
// //-----------------------END of class


// //------Inheritance

// class Dog extends Animals{
//     //super is keyword used to refer parent class
//     constructor(name,age,breed){
//         super(name,age);
//         this.breed = breed;
//     }

//     inheritMethod(){ log( `From inherit method-> Name: _${this.name} ,Age: ${this.age} _Breed: ${this.breed}`)};  
    
//     invokeSuperMethod(){ super.play()}; //super is keyword used to refer parent class
// }
// const pet = new Dog('Mike',2,'labrabull');
// pet.inheritMethod();
// pet.invokeSuperMethod();
// pet.eat();
// //------END of Inheritance

// //-------_Static----------
// class Programmer{
//     static iAmAstaticMethod(){
//         log('output from static method')
//     }
// }
// log('--------------------------')
// //no need to do : const newProgrammer = new Programmer();
// //as static keyword is used
// //newProgrammer.iAmAstaticMethod(); 
// Programmer.iAmAstaticMethod(); 
// log('--------------------------')
// //----------_END of static method----------

// //Function Default Parameters
// const calcs = (x,y)=>  x+y ;
// console.log(calcs(1)); // this gives NAN outout

// //to avoid NAN error 
// const calcs2= (x,y=0)=>  x+y ;
// console.log(`using function Default Parameter ${calcs2(1)}`); // this gives NAN outout
// //same can be done when we have object as a parameter
// //---------------END Function Default Parameters


// // let partyPromise = false;
// // let giveParty = new Promise(function (resolve, reject) {
// //  setTimeout(() => {
// //  if (partyPromise) {
// //  resolve("hurray");
// //  } else {
// //  reject("error");
// //  }
// //  }, 1000);
// // });


// // // giveParty.then(function(value){console.log("we will have party.. " + JSON.stringify(value))},
// // // function(ers){ console.log(`NO PARTY.. ${ers}`)})

// // giveParty.then((value) => {
// //       console.log("we will have party.. " + JSON.stringify(value)) },
// //       ((err) => {console.log(`NO PARTY.. ${err}`)}));





// //obj destructuring
// //work on this error
// const userDetails =() =>{
//     return{
//         name: "shisab",
//         zipcode: 21231,
//         fullAddress: {
//             state : "LA",
//             apartment: 23,
//             doorNumber: {
//                 num: 212,
//                 doorPin: 21121
//             }
//         }
//     }
// };

// const getOutput = userDetails();
// //traditional way to getDoorNum -> Longer
// // const getDoorNum = getOutput.fullAddress.doorNumber.num;

// //shoreter and concise
// const { fullAddress : { doorNumber: {num: dn}  } }  = getOutput; 
// console.log(`door number is: ${dn}`);


// // //----END  obj destructuring



// // //ARRYOW FUNC
// // const hello = () => {
// //     const es6 = 'ES6';
// //     return `Hello ${es6}`;
// //   };
// //   //.map() creates new array by applying func for all elements in the array
// //   const powers = [1,2,3,4,5].map((number, index) => Math.pow(number, index));

  
// //   const adds = (n1, n2) => n1 + n2;

  
// //   const milesToKm = (miles) => miles * 1.60934;
  
// //   log(hello());
// //   log(powers);
// //   log(adds(100,100));
// //   log(milesToKm(100));

// //   //----------END ARROW FUNC

// // //Spread opeartor in obj --used in REACT mainly
// // // const addrs = { city: 'LA', zip: '21211', country: 'USA'};
// // // const favFood ={food1: 'rice', food2: 'momo', food3: 'chicken'};

// // // const outputArry = {
// // //     city: addrs.city, zip: addrs.zip, country: addrs.country,
// // //     food1: favFood.food1, food2: favFood.food2, food3: favFood.food3
// // // };

// // //same thing can be done easily using spread operator in obj
// // //const outputArry = {...addrs, ...favFood}; 
// // //log(JSON.stringify(outputArry,null,3));
// // //-----END Spread array on object-----






// // // //Spread operator arry
// // // const arry1 = ['hi', ' there', ' hyd'];
// // // const arry2 =[' shisab', ' sawa', ' anita'];
// // // const arry3 = [' yellow',' green', arry2,' blue'];
// // // //const arry4 = arry1 + arry2 + arry3; //regular way
// // // const arry4 = [...arry1, ...arry2, ...arry3];//spread operator->easier to write when concatenate
// // // console.log(arry4);
// // // //----End spread operator arry


// // //FOr each loop -> Addition of all elements in an arry
// // let sumz = 0;
// // const numbers_for_addition = [1,2,3,4,5];
// // numbers_for_addition.forEach(addNumberz)

// // function addNumberz(numz){
// //   sumz = numz+sumz;
// // }
// // console.log(sumz);

// // //---END for Each loop




// // //template literal basically makes concatenation easy
// // //as it only uses ` ` 
// // let cars_name = ["volvo", "Bmw" , "Honda"];
// // console.log(`Template literal -> First car in the list : ${cars_name[0]}. That's it`); //template literal
// // console.log(" First car in the list : "+ cars_name[0] + ". That's it");
// // //---END template literal 

// // //variables - var, let, constant
// // //general Rule - always use const unless you know for use value will change
// // let x;
// //  x = 2;
// // console.log(x);

// // const a =2;
// // // x =3 //not allowed
// // //but can change object properties/array elements 
// // // You can create a const object:
// // const car = {type:"Fiat", model:"500", color:"white"};

// // // You can change a property:
// // car.color = "red";

// // console.log(car);
// // // You can create a constant array:
// // const cars = ["Saab", "Volvo", "BMW"];

// // // You can change an element:
// // cars[0] = "Toyota";

// // // You can add an element:
// // cars.push("Audi");
// // console.log(cars);

// // // ----End of var --------


// // //Async
// // //print elements of an array using forEach() and print after 4sec
// // const animals = ['dog', 'cat', 'squireel', 'lion'];
// // //animals.forEach(getAnimals);
// // function getAnimals(){
// //      animals.forEach(displayAnimals);
// // }

// // function displayAnimals(n){
// //       console.log("hello "+ n);
      
// // }
// // function addAdnimals(){
// //     console.log("***************");
// //     animals.push('tiger');
// //     getAnimals();
    
// // }
// // //first argument = callback, second = timer
// // //setTimeout(()=>console.log('****setTimeout eg displayed after 4 second**'), 4000);

// // setTimeout(addAdnimals,4000);//example of async function
// // setTimeout(getAnimals,2000); //example of async function

// // //----END of async function--------------------------------


// // // -------------default import-------
// // var animal = new Animal();
// // log(animal.getClassType());

// // //import example - named import all
// // //log(Math.add(1,2));
// // //log(Math.subtract(4,2));

// // log(add(1,4)); // as  only add is imported only add() can be called 



// // //Q-> Print Even num using filter() 
// // const numbers = [1,2,3,4,5,6,7,8,9,10];
// // const filtered = numbers.filter(x => x%2==0);
// // log("filtered even num : " + filtered);















// // //CallBack functions: func calling another func. In other word,
// //function is passed as a parameter

// // function greeting(firstName, lastName, callbackExample){
// //     var firstNameLastName= firstName + " " + lastName;
// //     log(callbackExample(firstNameLastName));
// // }

// // // function callback(fullName){
// // //     return "Is your fullName: "+ fullName +"?"; 
// // // }
// // // log(greeting("shisab","singh", callback));

// // log(greeting("shisab","singh",  x=> "Is your fullName: "+ x + "?..")); 



// // //log(msg("shisab singh"));
// // log("callback funtion another way");

// // function calcSum(num1,num2,displayResult) {
// //     var result = num1 + num2;
// //    log(displayResult(result));

// // }

// // // function myCallback(totalSum){
// // //     log("result is: " + totalSum) ;
// // // }
// // //log (calcSum(1,2,myCallback));
// // function getSum(totalSum){
// //     return "result is:@@@@@@ " + totalSum;
// // }
// // log(calcSum(1,2,getSum));

// // // log(calcSum(1,2,function(totalSum){
// // //     return "result is: " + totalSum;
// // // }));


// // log("callbackExample using ArrowFunction =>");

// // function callbackExample2(name,callback2){
// //     log(callback2(name));
// // }

// // // log(callbackExample2("Mr.Singh23",function(userName){
// // //     return "hello "+ userName;
// // // }))

// // log(callbackExample2("Mr.Singh23",x=>"hello"+x));



// // // Map| Filter| Reduce array function

// // //map(): returns new array by applyin that fun to all elements of the array
// // var map = [1,2, 3, 4, 5].map(function(n){
// //     return n *2;
// // })
// // log("map()")
// // log(map);

// // const mapPractice = [1,2,3, 4, 5];
// // const newMapArray = mapPractice.map(mapFunction)

// // function mapFunction(num){
// //     return num * 2;
// // }
// // log("newArrayMap "+ newMapArray);






// // //filter: return only array that meets the condition function
// // var filter = [1,2, 3, 4, 5].filter(function(n){
// //     return n % 2 == 0;
// // })
// // log("@@@@@@@@filter() for even num")
// // log(filter);
// // log("================================")


// // log("filter practice");
// // const filterArray = [1,2, 3, 4, 5];
// // const newFilterArray = filterArray.filter(filterFunction);

// // function filterFunction(numbers) {
// //    return numbers % 2 == 0;
// // }

// // log("newFilterArray: "+ newFilterArray);

// // //reduce: reduce() returns a single value which is the function's accumulated result.
// // //accumulator = initial value & current = next value in an array
// // // then, computuated value between accum + current is stored in accumulator
// // var reduce = [175, 50, 25].reduce(function(accumulator,current){
// //     log(accumulator + " "+ current)
// //     return accumulator-current;
// // })

// // log("----@@@@@@");
// // log(reduce);
// // log("end of reduce -ve");


// // var reduce = [1, 2, 3].reduce(function(accumulator,current){
// //     log(accumulator + " "+ current)
// //     return accumulator+current;
// // })

// // log("****************");
// // log(reduce);


// // Semicolon , Single vs Double Quote
// // In js you can use single or double quote as you like
// // same with semicolon. you can either use it or not
// // same
// // cohersion 
// // - typeof changes the data type == . eg: 2 num data type of"2" became string data type of 2
// // relation is left to right. data type of left becomes data type of right
// // so better to use 3 ===
// log("without cohersion")
// log(typeof 2 + "-" + typeof "2")
// log(2 == "2");

// log("***With cohersion using 3 ===")
// log(typeof 2 + "-" + typeof "2")
// log(2 === "2");






// // //Function
// // // var addNumbers = function(input1,input2) {
// // //     return input1 + input2;
// // // }

// // // log("Added output: " + addNumbers(993393939339393,3));






// // // //Arrays
// // // var names = ["shisab", "nischal", "sawa"];
// // // log(names);
// // // log(JSON.stringify(names));
// // // log(names.length);

// // // log("********Simple way to loop via an array")
// // // for(var n of names){ 
// // //     log(n);
// // // };

// // // log("********Simple way to loop via an array with index")
// // // names.forEach(function(n, index){
// // //     log(index + "-" + n);
// // //     });
    










// // // log("hi");
// // // var age =10;
// // // var nickName ="shisab";
// // // var county ="Baltimore";
// // // log("shisab is " + age + " years old.");
// // // log("name is "+ nickName + typeof nickName);

// // // //{} indicates obj
// // // var person = {
// // //     names:"Shisab Singh",
// // //     age: 21,
// // //     county: "North",
// // //     favoriteColor: "Blue",
// // //     address: {
// // //         zip: 24452,
// // //         city: "Parkville"
// // //     }
// // // }

// // // //to access individual properties
// // // log(person.names);
// // // //converst javascript obt to json
// // // log(JSON.stringify(person));

// // // //Invoke Object.values to get all obj values
// // // log(Object.values(person));
