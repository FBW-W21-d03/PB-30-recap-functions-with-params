
let gastliste = ["Chuck", "John", "Peter", "Robert", "Diana", "Lucy", "Bob", "Charls", "Anabelle", "Ben" , "Simon"];


 function gäste(name) {

     if( gastliste.includes(name)) {

         console.log(true);


     }else {
         console.log(false);
     }

 }
 gäste("Eli");
 gäste("John");
 
