// class Student{
//     name="ajith"
//     age=20
//     class="BCS CS"
// }

// var a=new Student()
// var b=new Student()

// console.log(a);
// console.log(b);




// method



// class Student{
//     name="ajith"
//     age=20
//     class="BCS CS"

//     studying(){
//         console.log("studying cs");
//     }
// }

// var a=new Student()
// var b=new Student()

// console.log(a);
// console.log(a.name);
// a.studying()
// console.log(b);








// constructor 
//instanciation

// class Student{
//     constructor(){
//         console.log("object created");            //Instanciation
//     }
//     name="ajith"
//     age=20
//     class="BCS CS"

//     studying(){
//         console.log("studying cs");
//     }
// }

// var a=new Student()
// var b=new Student()










// class Student{
//     constructor(nm,ag,cls){
//         this.name=nm
//         this.age=ag
//         this.class=cls
//         console.log("object created"+this);           
//     }
   

//     studying(){
//         console.log("studying cs by " +this.name);
//     }
// }

// var a=new Student("ajith",24,"Bsc cs")
// var b=new Student("uday",22,"BCA")


// console.log(a);
// console.log(b);
// b.studying()











// class Student{
//     constructor(nm,ag,cls){
//         this.name=nm
//         this.age=ag
//         this.class=cls
//         console.log("object created"+this);           
//     }
   

//     studying(){
//         console.log("studying cs by " +this.name);
//     }
//     disply(){
//         console.log("name "+this.name,"class "+this.class,"age "+this.age);
//     }
// }

// var a=new Student("ajith",24,"Bsc cs")
// var b=new Student("uday",22,"BCA")


// console.log(a);
// console.log(b);
// a.studying()
// b.disply()










// BMI RESULT


class Patient{
constructor(name,h,w){
    this.Name=name
    this.height=h
    this.weight=w
}
bmiresult(){
    const weight=this.weight
    const heightsquare=this.height*this.height
    const bmi=weight/heightsquare
    console.log(bmi);
    if(bmi<18.5){
        console.log("under weight");
    }
    else if(18.5<=bmi && bmi < 24.9){
        console.log("normal");
    }
    else{
        console.log("obese");
    }

}
}



var a=new Patient("kiran",1.89,88)
var b=new Patient("amal",1.67,100)


console.log(a);
console.log(b);


a.bmiresult()
b.bmiresult()





// TASK 




// class Score{
//     constructor(nm,ds,c,se,py){
//         this.Name=nm
//         this.DataStructure=ds
//         this.Cprogramming=c
//         this.SoftwareREngineering=se
//         this.Python=py
//     }
//     avgscore(){
//         const totalscore=this.DataStructure+this.Cprogramming+this.SoftwareREngineering+this.Python
//         const averagescore=totalscore/4
//         console.log(`Average score of ${this.Name} is ${averagescore}`);
//     }
// }






// var a=new Score("messi",30,50,50,90)
// var b=new Score("neymer",33,80,30,20)
// var c=new Score("johncena",66,54,36,88)
// var d=new Score("rock",10,30,43,76)
// var e=new Score("meloni",20,90,90,96)



// a.avgscore()
// b.avgscore()
// c.avgscore()
// d.avgscore()
// e.avgscore()
