
//JavaScript object classes ES6
// class Persone{
//     constructor(firstName, LastName){
//         this.firstName = firstName;
//         this.LastName = LastName;
//     }
//     getFullName(){
//         return this.firstName + " " + this.LastName;
//     }
    
// }
// let p1 = new Persone("Mehrab", "HOsen");
// let p2 = new Persone("Rubel", "HOsen");

// console.log(p1.getFullName());
// console.log(p2.getFullName());

// function show (){
//     console.log(this === undefined);

//     function see(){
//         console.log(this == undefined);
//     }
//     see();
// }
// show();

//prefix function

// let car ={
//     brand: "Pazero"
// };
// let bike = {
//     brand: "gixer"
// };

// function getBrand(prefix){
//     console.log(prefix + this.brand);
// }

// getBrand.call(car, "It's a ");
// getBrand.call(bike, "It's a ");

