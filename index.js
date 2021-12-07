const gastlist = ["Chuck", "John", "Peter", "Robert", "Diana", "Lucy", "Bob", "chars", "Anabelle", "Ben", "Simon"];

function gastes(name) {
    if (gastlist.includes(name)) {
        console.log("Der Gast steht auf der Gästeliste");

    } else {
        console.log("Der Gast steht leider nicht auf der Gästeliste.");
    }

}

gastes("Osei");
gastes("Chuck");
gastes("Lucy");