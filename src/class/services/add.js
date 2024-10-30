export function add(equation) {

    if(equation.includes(".")) {
       return console.log("I cant make big calcs with floats numbers.")
    }

    let equationArray = equation.split("+")
    
    let borrowedValue = 0;

    let dividedString = equationArray.sort((fV, sV) => sV.length - fV.length)

    let lowestValue = dividedString[1].split("")

    let highestValue = dividedString[0]

    let valuesSize = highestValue.length - lowestValue.length;

    for(var i = 0; i < valuesSize; i++) {

        lowestValue.splice(i, 0, "0");
    }

    lowestValue = lowestValue.join("")

    let lowestArrayValue = lowestValue.split("")

    let highestArrayValue = highestValue.split("")

    let returnValue = [];

    for(var i = highestValue.length-1; i >= 0; i--) {

        let basicAnswer = parseInt(highestArrayValue[i])+parseInt(lowestArrayValue[i])

        if(borrowedValue > 0) {
            borrowedValue = 0;
            basicAnswer+= 1;
        }

        if(basicAnswer > 9 && i !== 0) {

            borrowedValue = 1;
            basicAnswer -= 10;
        }

        returnValue.push(`${basicAnswer}`)
    }

    return returnValue.reverse().join("")
}
