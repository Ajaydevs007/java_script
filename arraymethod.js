a=[1,2,3,"apple","mango"]

// 1)toString()

// res=a.toString()
// console.log(res);


// 2)join()


// res=a.join("_")
// console.log(res);


// 3)pop()


// res=a.pop()
// console.log(res);
// console.log(a);



// 4)push()


// res=a.push("messi")
// console.log(res);
// console.log(a);



// 5)shift()



// res=a.shift()
// console.log(res);
// console.log(a);



// 6)unshift()



// res=a.unshift(100)
// console.log(res);



// 7)delete()


// delete a[3]
// console.log(a);





// 8)concat()



// res=a.concat("orange")
// console.log(res);


// res=a.concat(["strawberry","blueberry"])
// console.log(res);





// 9)slice()



// res=a.slice(1,3)
// console.log(res);




// 10)length()

// console.log(a.length);



// 11)splice()


// res=a.splice(1,2,120,130,140)
// console.log(res);
// console.log(a);


// res=a.splice(1,0,120,130,140)
// console.log(res);
// console.log(a);



// 12)flat()


// b=[12,3,45,[1,2,334,5,61,2,34,4]]
// res=b.flat(3)
// console.log(res);




// 13)includes()


// res=a.includes("apple")
// console.log(res);


// res=a.includes("orange")
// console.log(res);



// 14)sort()

// a=["strawberry","apple","lemon","mango","banana","grapes"]
// // a.sort()
// a.reverse()
// console.log(a);

// a=[1,2,6,4,7,8,2,3,4]
// // a.sort((a,b)=>a-b)
// a.sort((a,b)=>b-a)
// console.log(a);







// find square value of every element in the numerical array

// a=[12,4,120,35,93,88,70,-5]


// for(i of a ){
//     i*=i
//     console.log(i);
// }

// arrowfun

// square=(val)=>{
//     console.log(val*val);
// }
// for(i of a){
//     square(i)
// }