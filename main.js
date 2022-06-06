/*Mensaje de alerta de inicio

alert ('Con toda la humildad, no sienta que wuau cuando miau!!');

/*Datos de nombre

var nombre = "Erich Vivas";
var altura = "172";

document.write (nombre);
document.write (altura);*/



/*Datos por agrupación

var nombre = "Erich Vivas";
var altura = "172";

var concatenacion = nombre + " " + altura

document.write (concatenacion);*/



/*Datos por getElement

var nombre = "Erich Vivas";
var altura = 172;

var concatenacion = nombre + " " + altura;

var datos = document.getElementById ("datos");
datos.innerHTML = concatenacion;


/*Datos por Templets String*/

var nombre = "Erich Vivas";
var altura = 172;

var concatenacion = nombre + " " + altura;

var datos = document.getElementById ("datos");

datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mi altura es: ${altura} cm</h3>
`;
