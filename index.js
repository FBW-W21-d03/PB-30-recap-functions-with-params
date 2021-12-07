let gastliste=["Chuck", "John", "Peter", "Robert", "Diana", "Lucy", "Bob", "Charls", "Anabelle", "Ben" , "Simon"]

let namegaste="nadin"

function checkname(gastliste) {
    if (gastliste.includes(namegaste)){
        console.log(true)
    }
    else{
        console.log(false)
    }
   
}

checkname(gastliste);