//  assignment no 03

    //   Temperature
 
let a = prompt ("Current Temperature in Celsius");
console.log(a);

if (a<=30){
    let b = alert("The Weather Is moderate!");
    
} else if(a>30){
    let c = alert("It's a Hot Day!");
    
}

    //   Marksheet

let Name = ("Name: Zeeshan Ahmed Siddiqui");
console.log(Name);

let Class = ("Class: First year");
console.log(Class);

let RollNo = ("Rol No: 361028");
console.log(RollNo);

let totalsubject = ("Total Subject: 5");
console.log(totalsubject);

let totalmarks = ("Total Marks: 500");
console.log(totalmarks);

let carry = ("Each Subject Carry 100 marks");
console.log(carry);

let maths = prompt("Your Marks In Mathematics");
let result1 = Number(maths)
console.log("Your Marks In Mathematics:" , maths);

let physics = prompt("Your Marks In Physics");
let result2 = Number(physics)
console.log("Your Marks In Physics:" , physics);

let chemistry = prompt("Your Marks In Chemistry");
let result3 = Number(chemistry)
console.log("Your Marks In Chemistry:" , chemistry);

let english = prompt("Your Marks In English");
let result4 = Number(english)
console.log("Your Marks In English:" , english);

let urdu = prompt("Your Marks In Urdu");
let result5 = Number(urdu)
console.log("Your Marks In Urdu:" , urdu);

let total = (result1 + result2 + result3 + result4 + result5);
let result6 = (total)
console.log("Total Marks:" ,total);

if(total <= 500 && total >=401) {
    console.log("Your Grade Is A1");
} else if(total <= 400 && total >=301) {
    console.log("Your Grade Is A");
} else if(total <= 300 && total >=201) {
    console.log("Your Grade Is C");
} else if(total <= 200 && total >=101) {
    console.log("Your Grade Is D");
} else if(total <= 100 && total >=1) {
    console.log("You Are Fail");
} else if (total>500){
    console.log("it is not possible");
}



  
