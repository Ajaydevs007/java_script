// normal for loop to get each element in the array or String
//just a example


// a=[1,23,4,5,"sunil"]

// a="india is a vast country"


// for(i=0;i<a.length;i++){
//     console.log(a[i]);
// }






// for of
// ---------------


// a=[1,23,3,45,"john",'angel']

// for(i of a){
//     console.log(i);
// }



// a="argentina has won the world cup"

// for(i of a){
//     console.log(i);
// }









// for in 
// -------------


// a={name:"ajay",phone:45566799,place:"vengeri"}

// for(i in a){
//     console.log(a[i]);
// }




// task 


a="apple is red and apple is sweet"
res=a.split(" ")
 count={}

 for (i of res){
    if(count[i]){
        count[i]++
    }
    else{
        count[i]=1
    }
 }
 console.log(count);