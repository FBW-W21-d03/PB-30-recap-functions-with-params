const gastliste = ["Chuck", "John", "Peter", "Robert", "Diana", "Lucy", "Bob", "Charls", "Anabelle", "Ben", "Simon"];

function gästelisteCheck(Gastes) {

    let ergebnis = gastliste.includes(Gastes);

    console.log(ergebnis);

    return ergebnis;
}

gästelisteCheck("Peter");
gästelisteCheck("Peer");