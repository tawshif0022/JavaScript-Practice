
// const car ={
// 	name:"Bugatti",
// 	type:"Racing",
// 	weight:"850kg",
// 	model:500,
// 	color:"white",
// 	start:function(){
// 	 this.drived()
// 	  console.log('Car Has Started.. :)')
// 	  console.log(this.color)
// 	},
  
// 	drived:function(){
// 	  console.log('Car is driving..!')
  
// 	}
// }

// console.log(car.name);
// console.log(car.type);
// console.log(car['weight']);
// car.start()
// car.drived()

// let y = 5;
// let x = new Number(5);

// console.log(typeof x);

// // function sayHi(){
// // 	console.log(name);
// // 	console.log(age);

// // 	var name = 'JavaScript';
// // 	let age = 21;
// // }

// // sayHi()


// function myName(){
// 	console.log('Hello World')
// }

// myName();

// console.log(new Date())

// let text = "The Quick Brown \"Fox Jumps\" Over The lazy dog";

// console.log(text)

// let fruits ="Apple, Banana, Kiwi";

// console.log(fruits.slice(4,14));


// let fruit ="Apple, Banana";

// console.log(fruit.startIndexOf());

// let num = (0.1*10+0.2*10)/10;

// console.log(num);

// let isGraduated = true;
// let salary = 75000;
// let car = 1;

// if(isGraduated===true && salary>=50000 && car>=1){
//     console.log("Eso Biye kore Feli.. :)");
// }

// else{
//     console.log("Tomake ar Dorkar nai.. :)");
// }

// if(salary>40000 || car>=3){
//     console.log("Ami tomar sathe prem korte Raji .. :)");
// }

// else{
//     console.log("Odidike Giye mor beta :(");
// }


// let fruits = ["Apple", "Banana", "Orange"];

// let index = fruits.indexOf("Banana");

// fruits.splice(index, 1, "Jackfruit")

// console.log(fruits);

// const name = 'Peter';
// const totalNumber = 60;

// if(totalNumber>=90){
//     console.log("You have got Golden A+...");
// }

// else if(totalNumber>=80){
//     console.log("You have Got A+");
// }

// else if(totalNumber>=70){
//     console.log("You have got A ");
// }
// else if(totalNumber>=60){
//     console.log("You have got B");
// }

// let table = ["Books", "Pe", "Notes", "Laptop"];
// let indexx = table.includes("Pen");

// if(indexx==true){
//     console.log("I am Very Guchalo.. :)");
// }

// else{
//     console.log("I have to be sincere");
// }

// let roastGiven = 0;

// while(roastGiven<7){
//     console.log(roastGiven);
//     console.log("Roast den Vai !")
//     roastGiven++;

// }

// let num = 1;

// while(num<=100){
//     console.log(num);
//     num =num+2;
// }

// for(let i = 1; i<=10; i+=2){
//     console.log(i);
// }

// let arr = [45, 67, 23, 59, 29, 56, 76, 39];

// console.log(arr[0])

// for(let i = 0; i<arr.length;i++){
//     let arrs = arr[i];
//     if (arrs>50){
//         continue;
//     }
//     console.log(arrs);
// }

// const person = {
//     fName:"Tawshif",
//     lName:"Shaharier",
//     Sex:"Male"
// }

// person.fName = "Sheikh";
// let personv = Object.values(person)
// console.log(personv)

// let color ="Yellow";

// switch(color){
//     case 'Green':
//         console.log('You are my green Friend');
//         break;
//     case 'Yellow':
//         console.log('You are my Best Best Friend')
//         break;
//     default:
//         console.log('You are noy my Friend')
        
// }



// for(let i =0; i<grades.length; i++){
    
//     let values = grades[i];
//         let value2 = eval(grades.join('+'))/grades.length;
//         console.log(value2);
//     // }
    
//     function evenOdd(num){
        
//             for(let i =0; i<=num; i++){
//                     if (i%2==0){
//                             console.log(i);;
//                         }
//                     }
//                 }
                
//                 evenOdd(10)


//     const grades = [80, 77, 88, 95, 68];
//     const oddNumber = []

//     function myNumbers(number){
//         for(let i =0; i<number.length;i++){
//             let index = i;
//             let elements = number[index];
//             if(elements%2==0){
//                 console.log(index, elements);

//             }
//             else{
//                 console.log("Number Didn't Find");
//             }   
            
//         let adding = oddNumber.push(elements);
//         console.log(adding);
//         }

//     }

//     myNumbers(grades);

//     function cToF(celsius) 
//     {
//       var cTemp = celsius;
//       var cToFahr = cTemp * 9 / 5 + 32;
//       var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//         console.log(message);
//     }
    
//     function fToC(fahrenheit) 
//     {
//       var fTemp = fahrenheit;
//       var fToCel = (fTemp - 32) * 5 / 9;
//       var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//         console.log(message);
//     } 
//     cToF(60);
//     fToC(45);

//     function Fhight(fahrenheit){
//         let cTemp = fahrenheit;
//         let cToFahr = cTemp * 9/ 5+32;
//         console.log(cToFahr);
//     }

//     Fhight(60);

//     const person ={
//         name:"Tawshif",
//         lname:"Shaharier",
//         age:20,
//     }


//     for(let x in person){
//         console.log(person[x]);
//     }


//     const grades = [80, 77, 88, 95, 68, 80];

//     for(let x of grades){
//         console.log(x);
//     }


// let i = 0;

// while(i<grades.length){
//     i++;
//     if(i===77){
//         console.log("Hello I am Tawshif");
//         break;
        
//     }
    
// }

// function randomNumber(min, max){
//     return Math.floor(Math.random() * (max-min+1))+min;
// }

// console.log(randomNumber(1, 6));

// const names = ["Tawshif", "Sumit", "Asraful", "Abrar"]

// console.log(names.sort());

// const rollNumbers = [30, 23, 49, 1, 4, 6, 59];
// rollNumbers.sort(function(a,b){
//     return a-b;
// });
// console.log(rollNumbers);

// function isLeapYear(year){
//     if((year%400===0) || (year%4===0) &&(year%100!==0)){
//         console.log(`${year} is a Leap year .. :)`);
//     }
//     else{
//         console.log(`${year} is not a Leap year .. :)`);
//     }
// }

// isLeapYear(2028)


// let vowels = ["a", "e","i", "o", "u", "A", "E", "I", "O", "U"];


// function countVowels(sentence){
//     let count = 0;
//     let letters = Array.from(sentence);

//     letters.forEach(function(value){
//         if(vowels.includes(value)){
//             count++;
//         }
//     })

//     return count;
// }
// console.log(countVowels("I love Bangladesh"));


// let numbers = [2, 5, 6, 8, 2, 3, 5, 6, 8];

// let duplicateValues = numbers.filter(function(value, index, array){
//     return array.indexOf(value)!==index;   
// })

// console.log(duplicateValues);

// let text = "I love Bangladesh We Hate Bangladesh";

// // let src = text.search(/bangladesh/i);
// let rep = text.replace(/Bangladesh/ig, "India")

// // console.log(src);
// console.log(rep);


// let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// const obj = JSON.parse(text);

// console.log(obj.employees[2].firstName);



// function FIzzBuzz(numbers){

//     for(let i =0;i<=numbers;i++){

//         if(i%15===0){
//             console.log(`The ${i} is FizzBuzz`);
//         }
//         if(i%3===0){
//             console.log(`The ${i} is Fizz`);
//         }

//         else if(i%5===0){
//             console.log(`The ${i} is Buzz`);
//         }
//         else{
//             console.log("The number is not FizzBuzz..!:(");
//     }


//     }
// }

// FIzzBuzz(100)