
const gastliste = ["Chuck", "John", "Peter", "Robert", "Diana", "Lucy", "Bob", "Charls", "Anabelle", "Ben" , "Simon"];
console.log(gastliste);
function istEnthalten (gast) {
    let anwesend = gastliste.includes(gast);
    console.log(anwesend);
}
istEnthalten("Sarah");

function istEnthalten (gast) {
    let anwesend = gastliste.includes(gast);
    console.log(anwesend);
}
istEnthalten("John");
