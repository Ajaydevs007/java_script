// 1)forEach()

// a=[12,4,120,35,93,88,70,-5]

// square=(val)=>{
//     console.log(val*val);
// }
                                      
// a.forEach(square) 



// easymethod

// a=[12,4,120,35,93,88,70,-5]

// a.forEach(val => {console.log(val*val);});



// Q)using forEach print even numbers only

// a=[12,3,46,88,702,11,93,45]

// a.forEach((val)=>{if(val%2==0)console.log(val);})



// Q)print the lenght one by one

// b=["apple","orange","kiwi","strawberry","cherry","tomato","papaya"]

// b.forEach(item=>{console.log(item.length);})







// 2)Map()


// square values in an array 

// a=[12,3,46,88,702,11,93,45]

// res=a.map((item)=>(item*item))
// console.log(res);





// odd values in an array 


// a=[12,3,46,88,702,11,93,45]

// res=a.map((item)=>{if(item%2!=0)return item;})
//     console.log(res);






// 3)filter()


// a=[12,3,46,88,702,11,93,45]

// res=a.filter((item)=>item%2!=0)
// console.log(res);






// 4)find()

// a=[12,3,46,88,702,11,93,45]

// res=a.find((item)=>item%2!=0)
// console.log(res);





// 5)reduce()



// a=[12,3,46,88,702,11,93,45]

// res=a.reduce((prev,item)=>prev+item)
// console.log(res);



// a=[12,3,46,88,702,11,93,45]

// res=a.reduce((prev,item)=>prev<item?prev:item)
// console.log(res);


// res=a.reduce((prev,item)=>prev>item?prev:item)
// console.log(res);






// 6)some()

// a=[12,3,46,88,702,11,93,45]


// res=a.some(item=>item%2==0)
// console.log(res);

// res=a.some(item=>item<0)
// console.log(res);



// 7)every()

// a=[12,3,46,88,702,11,93,45]

// res=a.every((item)=>item>0)
// console.log(res);












// Q)generate an array of factorial values of a given arrray's each element


// a=[1,22,5,6,72,12,3,8]


// res=a.map((item)=>{
//     fact=1
//  for(i=1;i<=item;i++){
//     fact*=i
//  }
//  return fact
// })

// console.log(res);















// forEach()
// Given an array of numbers, use forEach() to create a new array containing only the even numbers.

// let numbersForFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbersForFilter.forEach((items)=>{if(items%2==0){
//     console.log(items);
// }})




// Write a function that takes an array of numbers and uses forEach() to calculate the sum of all elements.


// let numbersForSum = [10, 20, 30, 40, 50];
// var sum=0
// numbersForSum.forEach((items)=>sum+=items)
// console.log(sum);






// Create an array of sports and use forEach() to print each sport along with its index in the array.


// let sports = ['Football', 'Basketball', 'Tennis', 'Swimming', 'Soccer'];

// sports.forEach((item,index)=>{console.log(item,index);})





// practicework=1
// ------------------

// students=[
//     {id:1,name:'ajith',age:20,batch:'BSC'},
//     {id:2,name:'sujith',age:19,batch:'BCA'},
//     {id:3,name:'renjith',age:18,batch:'BSC'},
//     {id:4,name:'vijith',age:21,batch:'BSC'},
//     {id:5,name:'amajith',age:20,batch:'BCA'},
    
// ]


//Q) print names of every student 

// students.forEach((item)=>{console.log(item.name);})



//Q) print names of every students from BSC
// res=students.filter((item)=>item.batch=="BSC").forEach((item)=>{console.log(item.name);})



//Q) print details of student named sujith

// res=students.filter((item)=>item.id==2)
// console.log(res);




//Q) print names of students than 20 or more

// students.filter((item)=>item.age>20).forEach((item)=>{console.log(item.name);})






//Q) find average age of students

// totalage=students.reduce((prev,item)=>prev+item.age,0)
// console.log(totalage/5);





// practicework--2
// ----------------------



commonwealth=[
    {id:1,name:"India",gold:20,silver:13,bronze:23},
    {id:2,name:"China",gold:25,silver:18,bronze:13},
    {id:3,name:"Usa",gold:8,silver:7,bronze:9},
    {id:4,name:"Russia",gold:9,silver:13,bronze:2}

]



// Q) print the names of every country participated

// commonwealth.forEach((item)=>{console.log(item.name);})

// Q) print the name of country with highest gold medal

// res=commonwealth.reduce((prev,item)=>prev.gold>item.gold?prev:item)
// console.log(res.name);


// Q) print the name of country with lowest bronze medal

// res=commonwealth.reduce((prev,item)=>prev.bronze<item.bronze?prev:item)
// console.log(res.name);


// Q) print the name of in the descending order of silvers they won

// commonwealth.sort((a,b)=>b.silver-a.silver).forEach((item)=>{console.log(item.name);})

// res=commonwealth.sort((a,b)=>b.silver-a.silver)
// console.log(res);


// Q) print the the total number of bronze collected by every countries

// res=commonwealth.reduce((prev,item)=>prev+item.bronze,0)
// console.log(res);



// Q) print the name of country with highest gold medal

// res=commonwealth.reduce((prev,item)=>prev.gold>item.gold?prev:item)
// console.log(res.name);



// Q) Get an array of count of each countries total medals

res=commonwealth.map((item)=>{
    c={}
    c.name=item.name
    c.count=item.gold+item.silver+item.bronze
    return c
})
console.log(res);


