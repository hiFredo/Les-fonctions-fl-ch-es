/*let maFunction = function () {
    console.log('test ');
}
maFunction()*/

/*let maFunction = () => {
    console.log('test01')
}

let maFunction = () => console.log('test1000')
maFunction() */

function bonjour(prenom) {
    let resultat = "Bonjour " + prenom; //variable locale 
    let maClosure = () => console.log(resultat);
    return maClosure;
}

//let maFunction = bonjour("Paul");
//maFunction();

function timer() {
    let seconde = 0;
    let maClosure = () => {
        return ++seconde
    }
    return maClosure  //closure sauv var local 
}

let monTimer = timer()

console.log(monTimer()) 