// class Human{
//     eyes=2
//     limbs=4
//     intelligence=true
//     breathing(){
//         console.log('breath');
//     }
// }

// class Indian extends Human{
//     nationallity='Indian'
// }



// ob= new Indian()

// console.log(ob.nationallity);
// console.log(ob.eyes);





class Human{
    constructor(nm){
        this.Name=nm
    }
    eyes=2
    limbs=4
    intelligence=true
    breathing(){
        console.log('breath');
    }
}

class Indian extends Human{
    constructor(nm,st){
        super()
        this.Name=nm
        this.state=st
    }

    
    nationallity='Indian'
}



ob= new Indian("ajay","kerala")

// console.log(ob.nationallity);
// console.log(ob.eyes);
// console.log(ob.Name);
// ob.breathing()
console.log(ob.Name,ob.state);

