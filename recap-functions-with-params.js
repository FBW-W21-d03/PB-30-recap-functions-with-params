const gastliste = ["Chuck", "John", "Peter", "Robert", "Diana", "Lucy", "Bob", "Charls", "Anabelle", "Ben", "Simon"];

function gästelisteCheck(Gastes) {

    if (gastliste.indexOf(Gastes) !== -1) {
        console.log(true);
    } else {
        console.log(false);
    }
    
}

gästelisteCheck("Peter");
gästelisteCheck("Peer");