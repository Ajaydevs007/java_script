// //    without parameters

// // function details(){
// //     var sname="ajaydevs"
// //     var age=23
// //     var statement =`my name is ${sname} and i am ${age}`
// //     console.log(statement);
// // }
// // details()



// // parameters and arguments

// // function details(sname,age){
// //     console.log(`my name is ${sname} and i am ${age}`);
// // }


// // var naam ='john cena'
// // var umar =43
// // details(naam,umar)







// // factorial of any Number passed as arguments


// function factorial(num){
//     var mul=1
//     for (i=1;i<=num;i++){
//         mul*=i

//     }
//     console.log(mul);
// }


// factorial(5)



// function factorial(num){
//     fact=1
//     for(i=1;i<=num;i++){
//         fact*=i
//     }
//     return fact
// }


// res=factorial(5)
// console.log(res);

// res=factorial(4)
// console.log(res);








// Recurive function


function factorial(num){
    if(num==1){
        return 1
    }
    else{
        return num*factorial(num-1)
    }
}

res=factorial(5)
console.log(res);