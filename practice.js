// var r1=43
// var r2=106

// for(r1;r1<=r2;r1++){
//     if(r1%2!=0){
//       console.log(r1);
//     }
// }



// var element=40
// for(i=40;i>=1;i--){
//     if(element%i==0){
//         console.log(i);
//     }
// }



// var num=5
// var sum=0
// for(i=1;i<=num;i++){
//     sum+=i  
// }
// console.log(sum);



// var num=5
// var fact=1


// for(i=1;i<=num;i++){
//   fact*=i
// }
// console.log(fact);


// var num=5
// fact=1

// for(i=num;i>=1;i--){
//     fact*=i
// }
// console.log(fact);




// var num=5
// var n1=0
// var n2=1

// for(i=n1;i<=num;i++){
//     n1+=i
//     console.log(n1);
// }



// var n1=0
// var n2=1

// for(i=0;i<=10;i++){
//     console.log(n1);


//     var n3=n1+n2
//         n1=n2
//         n2=n3
// }



// var r1=5
// var r2=10
// var fact=1

// for(r1;r1<=r2;r1++){
//     fact*=r1
// }
// console.log(fact);







// function factorial(num){
//     var mul=1
//     for(i=1;i<=num;i++){
//         mul*=i
//     }
//     console.log(mul);
// }


// factorial(5)



// function details() {
//     var club = "arsenal"
//     var player = "saka"
//     var statement = `my fav club is ${club} and fav player is ${player}`
//     console.log(statement);

// }


// details()



// class Patient{
//     constructor(nm,h,w){
//           this.Name=nm
//           this.height=h
//           this.weight=w
//     }

//     bmiresult(){
//         const weight=this.weight
//         const height=this.height
//         const heightsquare=height*height
//         const bmi=weight/heightsquare
//         // console.log(`Bmi result of ${this.Name} is ${bmi}`);

//         if(bmi<18.5){
//             console.log(`Bmi result of ${this.Name} is ${bmi} and he is under weight`);
//         }
//         else if (bmi>=18.5 && bmi<=24.5){
//             console.log(`Bmi result of ${this.Name} is ${bmi} and he is normal`);

//         }
//         else{
//             console.log(`Bmi result of ${this.Name} is ${bmi} and is obese`);
//         }
//     }
// }




// var a=new Patient("messi",1.67,78)
// var b=new Patient("rono",1.9,69)


// a.bmiresult()
// b.bmiresult()








// class Student{
//     constructor(nm,m,p,b,c){
//         this.Name=nm
//         this.Maths=m
//         this.Physics=p
//         this.Biology=b
//         this.Chemistry=c
//     }

//     averagescore(){
//         const totalscore=this.Maths+this.Chemistry+this.Biology+this.Physics
//         const average=totalscore/4
//         console.log(`Average Score of ${this.Name} is ${average}`);
//     }
// }











// var a=new Student("luka",99,88,77,66)
// var b=new Student("kuttu",93,58,67,76)
// var c=new Student("suttu",100,80,71,68)
// var d=new Student("mattu",93,58,47,96)
// var e=new Student("chattu",100,28,72,36)



// a.averagescore()
// b.averagescore()
// c.averagescore()
// d.averagescore()
// e.averagescore()

// console.log(a.Name);




// a=[12,4,120,35,93]

// square=((val)=>{console.log(val*val);})

// for (i of a){
//     // console.log(i*i);

//     square(i)
// }


// a.forEach((item)=>{console.log(item*item);})


// Create an array of your favorite foods and use forEach() to log each one to the console.

// let favoriteFoods = ['Pizza', 'Burger', 'Sushi', 'Ice Cream', 'Tacos'];

// res=favoriteFoods.forEach((items)=>{console.log(items);})







// Take an array of numbers and use forEach() to double each number in place (modify the original array).
// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((items)=>{console.log(2*items);})






// Create an array of sports and use forEach() to print each sport along with its index in the array.


// let sports = ['Football', 'Basketball', 'Tennis', 'Swimming', 'Soccer'];

// sports.forEach((item,index)=>{console.log(item,index);})









// Write a function that takes an array of numbers and uses forEach() to calculate the sum of all elements.


// let numbersForSum = [10, 20, 30, 40, 50];
// var sum=0
// numbersForSum.forEach((items)=>sum+=items)
// console.log(sum);








// Given an array of numbers, use forEach() to create a new array containing only the even numbers.

// let numbersForFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbersForFilter.forEach((items)=>{if(items%2==0){
//     console.log(items);
// }})







// Map()


// Create an array of numbers and use map() to return a new array where each number is doubled.

// let numbers = [1, 2, 3, 4, 5];

// res=numbers.map((item)=>item*2)
// console.log(res);




// Create an array of temperatures in Fahrenheit and use map() to convert each temperature to Celsius.

// let fahrenheitTemperatures = [32, 45, 68, 75, 82];

// res=fahrenheitTemperatures.map((f)=>(f-32)*5/9 + "c")
// console.log(res);




// Create an array of objects representing people with firstName and lastName properties.
//  Use map() to create a new array containing only the first names.


// let people = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Smith' },
//     { firstName: 'Mike', lastName: 'Johnson' }
// ];


// res=people.map((names)=>names.firstName)
// console.log(res);



// Create an array of objects with name and age properties.
//  Use map() to return a new array of objects where each object contains a label property that combines name and age.


// let persons = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Carol', age: 35 }
// ];

// res=persons.map((items)=>({label: `${items.name} and ${items.age}`}))
// console.log(res);




// Create an array of strings and use map() to convert each string into an array of its characters.
// let strings = ['Hello', 'World', 'JavaScript', 'Programming'];

// res=strings.map((items)=>items.split(""))
// console.log(res);







// Filtering even numbers:
// num= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// res=num.filter(item=>(item%2==0))
//     console.log(res);



// Filtering strings longer than a certain length:
// Arr= ['apple', 'banana', 'pear', 'grapefruit', 'kiwi']


// res=Arr.filter(item=>item.length>5)
// console.log(res);



// Filter out people who are considered adults (age 18 and older) from the array of objects

// people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 30 },
//     { name: 'David', age: 16 }
// ]
// res=people.filter((item)=>item.age>=18)
// console.log(res);






// iltering based on multiple conditions (e.g., adults who are teachers):

// people=[
//     { name: 'Alice', age: 25, profession: 'teacher' },
//     { name: 'Bob', age: 17, profession: 'student' },
//     { name: 'Charlie', age: 30, profession: 'teacher' },
//     { name: 'David', age: 16, profession: 'student' }
// ]

// res=people.filter((item)=>item.profession=='teacher')
// console.log(res)



// Finding the first even number:

// arra= [1, 3, 5, 2, 4, 6, 7, 9]

// res=arra.find((item)=>item%2==0)
// console.log(res);



// Find the string 'banana' in the array 
// arr=['apple', 'banana', 'pear', 'kiwi', 'orange']
// res=arr.find((item)=>item=="banana")
// console.log(res);






// Question: Find an object in the array of objects where the id property is 3.

// empolye=[
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' },
//     { id: 4, name: 'David' }
// ]
// res=empolye.find((item)=>item.id==3)
// console.log(res);






// Question: Find an object in the array of objects where age is greater than 25 and name starts with 'C'.

// peole = [
//     { id: 1, name: 'Alice', age: 25 },
//     { id: 2, name: 'Bob', age: 30 },
//     { id: 3, name: 'Charlie', age: 20 },
//     { id: 4, name: 'David', age: 35 }
// ]

// res=peole.find((item)=>item.age>25 && item.name.startsWith('c'))
// console.log(res);




// reduce()

// arra= [1, 3, 5, 2, 4, 6, 7, 9]
// // res=arra.reduce((prev,item)=>prev+item)
// // console.log(res);

// res=arra.reduce((prev,item)=>prev>item?prev:item)
// console.log(res);



// Calculating the sum of numbers:
// ra=[1, 2, 3, 4, 5]
// res=ra.reduce((prev,item)=>prev+item)
// console.log(res);



// Concatenating strings:
// rray= ['Hello', ' ', 'world', '!']

// res=rray.reduce((prev,item)=>prev+item)
// console.log(res);



// Calculating the product of numbers:
rray= [2, 3, 4, 5]
res=rray.reduce((prev,item)=>prev*item)
console.log(res);