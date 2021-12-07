
const gastebuch = ["Chuck", "John", "Peter", "Robert", "Diana", "Lucy", "Bob", "Charls", "Anabelle", "Ben", "Simon"];  // Array


function gasteliste(Gast) {

    if (gastebuch.indexOf(Gast) !== -1) {
        console.log("Bob",true);
    } else {
        console.log("Metatron",false);
    }
    
}

gasteliste("Bob");
gasteliste("Metatron");