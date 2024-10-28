const dt = new Date()
console.log(dt.getDay());




switch (dt.getDay()) {
    case 0:
        console.log("sunday");
        break

    case 1:
        console.log("monday");
        break

    case 2:
        console.log("tuesday");
        break

    case 3:
        console.log("wedesday");
        break

    case 4:
        console.log("thursday");
        break

    case 5:
        console.log("friday");
        break

    case 6:
        console.log("saturday");
        break

    default:
        console.log("invalis");
        break
}