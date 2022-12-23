

/*Variable Declarada  donde se guarda y pide el dato
var respuesta =prompt("¿Eres culpable?");

if( respuesta == "Si"){
    document.write("Iras a la carcel");


}else if( respuesta =="No"){
    document.write("Irás a la casa");

}else{
    document.write("Eres sospechoso te quedaras");
}
*/

/* 
Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuanto le costará en función del topping que elija.

El helado sin topping cuesta 1.90€.
El topping de oreo cuesta 1€.
El topping de KitKat cuesta 1.50€.
El topping de brownie cuesta 0.75€.
El topping de lacasitos cuesta 0.95€.
En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla «no tenemos este topping, lo sentimos. » y a continuación informar del precio del helado sin ningún topping.
Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno).
*/

document.write("<h1>Bienvenido a la Heladeria </h1>" );
document.write("Topping , Oreo  , KitKat , Brownie , Lacasitos ");
var opcion=prompt("Elige una opcion");

if(opcion =="Topping"){
    document.write("<h2>Has elegido la opción del Tooping y cuesta 20</h2>");
}else if(opcion == "Oreo"){
    document.write("Has elegido la opcion de Oreo y cuesta 100");
}else if(opcion== "KitKat"){
    document.write("Has elegido la opción del KitKat");

}else if(opcion==Brownie){
    document.write("Has elegido la opcion de Lacasitos");
    
}else{
    document.write("No existe esa opcion");
}





