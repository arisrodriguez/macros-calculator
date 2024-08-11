/* MACROS   
   40% carbs ->  1 carbs = 4 cals = 0.4
   35% proteina -> 1 proteina = 4 cals = 0.35
   25% grasa -> 1 grasa = 9 clas = 0.4
*/

const formulario = document.querySelector("#formulario");

//create event
formulario.addEventListener( "submit", calculateMacros)

//create function
function calculateMacros(e){
   e.preventDefault();
   const peso = document.querySelector("#weight").value
   
   //Calculando el deficit
   var calorias = peso * 12

   //Calculando los carbohidratos
   var Gcarbs = ((calorias * 0.4)/4).toFixed(2)

   //Calculando las proteinas
   var Gprotein = ((calorias * 0.35)/4).toFixed(2)
  
   //Calulando las grasas
   var Gfat = ((calorias * 0.4)/9).toFixed(2)

   const respCals = document.getElementById("cals");
   respCals.textContent = `${calorias} cals/day`
   
   const respCarbs = document.getElementById("carbs");
   respCarbs.textContent = `${Gcarbs} grams/day`

   const respProtein = document.getElementById("protein");
   respProtein.textContent = `${Gprotein} grams/day`

   const respFat = document.getElementById("fat");
   respFat.textContent = `${Gfat} grams/day`

   if(peso==""){
      alert("The weight field is mandatory");
      document.getElementById("weight").focus();
   }else{
      state = document.getElementById("mostrar-resultados");
      state.hidden = false;
      document.getElementById("weight").value="";
      document.getElementById("weight").focus();
   }
   
}














