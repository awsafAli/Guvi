var employees = [
    { name: "Adhi", gender: "male" },
   { name: "Ahamed", gender: "male" },
   { name: "Rutika Kadam", gender: "female" },
   { name: "Priyadharsini", gender: "female" },
 
 ];
   
 var output =  employees.filter(employee => employee.gender == "female");
 for(var i=0;i<output.length;i++){
   console.log(output[i].name);
 
 }


 var employees = [
    { name: "Adhi", gender: "male" },
   { name: "Ahamed", gender: "male" },
   { name: "Rutika Kadam", gender: "female" },
   { name: "Priyadharsini", gender: "female" },
 
 ];
   
var output =  employees.filter(employee => employee.gender == "male"); 
console.log(output.length);


