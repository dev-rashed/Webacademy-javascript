let persone = {
    fristName : "Mehrab",
    lastName : "Hosen"
   
}
persone.sss = "31 August, 32002";
// console.log(persone)
Object.defineProperty(persone, 'age' , {
    enumerable :true,
    value : '21'
});

for(const key in persone){
    console.log(key);
};
