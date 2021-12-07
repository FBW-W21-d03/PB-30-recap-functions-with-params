
const gastliste = ["Chuck", "John", "Peter", "Robert", "Diana", "Lucy", "Bob", "Charls", "Anabelle", "Ben" , "Simon"];
console.log(gastliste);
function istEnthalten (gast) {
    let Werten = gastliste.includes(gast);
    console.log(Werten);
}
istEnthalten("Sarah");
istEnthalten("John");
istEnthalten("Robert");
istEnthalten("Hayat");
