let gastliste=["Chuck", "John", "Peter", "Robert", "Diana", "Lucy", "Bob", "Charls", "Anabelle", "Ben" , "Simon"];


function gäste(verification) {
if (gastliste.includes(verification)) {
    return true;
}  
else{
    return false;
}

}
let security=gäste("Wolfgang","John","Peter");

console.log(security)