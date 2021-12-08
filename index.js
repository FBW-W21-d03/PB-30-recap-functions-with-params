
let gastliste = ["Chuck", "John", "Peter", "Robert", "Diana", "Lucy", "Bob", "Charls", "Anabelle", "Ben" , "Simon"];


 function gäste(name) {

     if( gastliste.includes(name)) {

         return true;


     }else {
         return false;
         
     }

 }
 console.log(gäste("Eli"));
 console.log(gäste("John"));


 
 gäste("Eli");
 gäste("John");
 
