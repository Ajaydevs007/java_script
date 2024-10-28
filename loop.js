// print hello world 5 times

// for(i=1;i<=5;i++){
//     console.log(`${i} hello world`);
// }



// print 1 to 10

// for (i=1;i<=10;i++){
//     console.log(i);
// }



// print 10 to 1
// for(i=10;i>=1;i--){
//     console.log(i);
// }



// print 2 4 6 8

// for(i=2;i<=8;i++){              
//     if(i%2==0){
//         console.log(i);
//     }
// }
// for(i=2;i<=8;i+=2){
//     console.log(i);
// }




// multiplication of 2

// var num=2
// for(i=1;i<=10;i++){
//     console.log( i,`* 2 =`,i*num);
// }





// 28/6/24




//disply all square values of number 1 to 10

// for(i=1;i<=10;i++){
//     console.log(i**2);
// }




//find odd numbers from range1 to range2

// var r1=5
// var r2=25

// for(r1;r1<=r2;r1++){
//     if(r1%2!=0){
//         console.log(` ${r1} is odd `);
//     }

// }




//disply the even multipler of 5 from range1 to range2


// var range1=1
// var range2=100


// for(range1;range1<=range2;range1++){
//     if(range1%2==0 && range1%5==0){
//         console.log(range1);
//     }
// }



//find all factors of a number

// var num=9

// for(i=1;i<=num;i++){
//     if(num%i==0){
//         console.log(i);
//     }
// }



// var num=9
// for(var i=num;i>=1;i--){
//     if(num%i==0){
//         console.log(i);
//     }
// }





// greater than 5 ---- 5+1
// lesser than 5 --- 5-1
// equal 5



// var a=1
// var b=15

// for(a;a<=b;a++){
//     if(a<5){
//         console.log(a-1);
//     }
//     else if(a>5){
//         console.log(a+1);
//     }
//     else{
//         console.log(5);
//     }
// }




// 2/7/24


// sum of the number

// var num= 5
// var sum=0

// for(i=1;i<=5;i++){
//  sum=sum+i
// }
// console.log(sum);



// find the factorial of 5

// var num=5
// var mul=1
// for(i=1;i<=num;i++){
//     mul=mul*i
// }
// console.log(mul);

// decrement method

// var num=5
// var fact=1
// for(num;num>0;num--){
//     fact*=num
// }
// console.log(fact);




// fibonacci series 


// var num1 = 0
// var num2 = 1
// for (i = 0; i <= 10; i++) {
//     console.log(num1);

//     var num3 = num1 + num2
//     num1=num2
//     num2=num3
// }




// find the factoriel rang1 to rang2

// var r1 = 5
// var r2 = 10


// for (r1; r1 <= r2; r1++) {
//     var fact = 1

//     for (i = 1; i <= r1; i++) {
//         fact *= i

//     }
//     console.log(fact);
// }





// task 

// iterates from 0 to 15 for each itration checks odd or even 

for(i=0;i<=15;i++){
    if(i%2==0){
        console.log(` ${i} is even`);
    }
    else {
        console.log(` ${i} is odd`);
    }
}
console.log(`---------------------------------------------------`);


// print +ve odd numbers from -5 to 5

for(i=-5;i<=5;i++){
    if(i>0){
        console.log(i);
    }
}
console.log(`-------------------------------------------------------`);





//find the sum of all factors of n

var n=5
var fact=0
for(i=1;i<=n;i++){
    if(n%i==0){
        fact+=i
    }
}
console.log(`sum of the factors is ${fact}`);

console.log(`-------------------------------------------------------`);





//check the count of odd numbers from num1 to num2

var num1=1
var num2=20
count=0
for(num1;num1<=num2;num1++){
    if(num1%2!=0){
        count++
    }
}
console.log(`the count of odd numbers is ${count} `);
