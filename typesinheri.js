
// prototype inheritance


baleno={
    name:"baleno",
    manufacturer:"suzuki",
    tyres:4,
    fuel:["petrol","diesel"],
    colors:["black","white"],
    cc:1200
}

glanza={
    name:"glanza",
    manufacturer:"toyota"
}

glanza.__proto__=baleno



console.log(glanza.name);
console.log(glanza.manufacturer);
console.log(glanza.tyres);
console.log(glanza.fuel);
console.log(glanza.colors);
console.log(glanza.cc);