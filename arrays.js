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
  console.log(a);
  /* opgave 2 add element to array */
catsArray.push("sniffles");
console.log(catsArray)
}) // ends DOMContentLoaded