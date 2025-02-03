document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- /
/* opgave 1 numbers from 20 up */
  let a = numbersArray.filter(function(value){
return value >=20;
  });
  console.log("opgave 1a",a);


  /* opgave 2 add element to array */
catsArray.push("sniffles");
console.log("opgave 2a",catsArray)

/* opgave 3 */

let hasTrixie = dogsArray.includes("trixie")
console.log("opgave 3a", hasTrixie)

let hasBaxter = dogsArray.some((dog) => {return dog == "Baxter"})
console.log("opgave 3b", hasBaxter)


/* opgave 4 */

let findbag = catsArray.find(cat => cat == "Bagheera")
console.log("opgave 4a", findbag)

let findsalem = catsArray.find(cat => cat == "Salem")
console.log("opgave 4b", findsalem)

/* opgave 5  mutiply each with 3 */

let multipy = numbersArray.map((x) => x * 3);
console.log("opgave 5a", multipy);

/* opgave 6 join dog namelist in one line iwth no space between */

console.log("opgave 6a", dogsArray.join(''));

/* opgave 7 */

let mangoIndex = fruitsArray.indexOf("Mango")
console.log("opgave 7a", mangoIndex);

let blueberryIndex = fruitsArray.indexOf("Blåbær")
console.log("opgave 7b", blueberryIndex);

/* opgave 8 */

console.log(dogsArray);

let dogsmodifiy =dogsArray.filter(dog => dog != "Polly")
console.log("opgave 8a",dogsmodifiy);


/* extra */

//[12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]
let sum = numbersArray.reduce((result, number) => result + number, 0)
console.log("extra opgave", sum);

}) // ends DOMContentLoaded