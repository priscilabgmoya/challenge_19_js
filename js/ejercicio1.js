/**
 * Realice un programa que dada la vida de un personaje, indique una acción: 
    ∙ Si la vida es menor a 50, que cure nuestro personaje con una poción grande de vida y nos muestre la vida actual 
       después de haberlo curado.
    ∙ Si la vida es menor a 75, que cure nuestro personaje con una poción chica de vida y nos muestre la vida actual 
       después de haberlo curado.
    ∙ Si la vida es mayor o igual a 75 que no cure a nuestro personaje y nos informe de ello.
    ∙ la poción de vida chica cura 25 y la grande 50.
 */

const curacion_vida_chica = 25; 
const curacion_vida_grande = 50; 

let vida_jugador  = parseInt(prompt('Ingrese vida del jugador'));

if(!isNaN(vida_jugador) && vida_jugador >= 1 && vida_jugador <= 100){
    if(vida_jugador < 50){
        vida_jugador = vida_jugador +curacion_vida_grande; 
        alert(`vida curada: ${vida_jugador}`); 
    }else if(vida_jugador < 75){
        vida_jugador = vida_jugador +curacion_vida_chica; 
        alert(`vida curada: ${vida_jugador}`); 
    }else{
        alert(`No se curó la vida! `); 
    }

}else{
    alert('Ingrese una vida correcta. Valores de vida entre 1 y 100');
}