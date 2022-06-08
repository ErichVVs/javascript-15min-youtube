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


/*Datos por Templets String

var nombre = "Adán Erich";
var apellido = "Vivas Sánchez";
var altura = 192;

var concatenacion = nombre + apellido + " " + altura;

var datos = document.getElementById ("datos");

datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h2>Mi apellido es: ${apellido}</h2>
    <h3>Mi altura es: ${altura} cm</h3>
`;

/* Condicionales

if(altura >= 190){
    datos.innerHTML += '<h2>Eres una persona ALTA</h2>';
}else{
    datos.innerHTML += '<h2>Eres una persona BAJITA</h2>';
}

/* Bucles 

for (var i = 2020; i<=2022; i++){
    // bloque de instrucciones
    datos.innerHTML += "<h4>Estamos en el año: "+i;
} */

/* funciones */

function MuestraMiNombre (nombre, apellido, altura) {
    var datos = document.getElementById ("datos");
    datos.innerHTML = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h2>Mi apellido es: ${apellido}</h2>
        <h3>Mi altura es: ${altura} cm</h3>
    `;
}

MuestraMiNombre ("Adán Erich", "Vivas Sánchez", 172);

/* Variables con variables multiples 

var animo = ['Ansiedad', 'Amsiedad', 'Anxiety'];
alert (animo[1]); */

var animo = ['Ansiedad', 'Amsiedad', 'Anxiety'];

document.write('<h1>Listado de animos</h1>');

/*
for (i = 0; i < animo.length; i++){
    document.write(animo[i] + '<br/>');
} */

animo.forEach((animo) => {
    document.write (animo + '<br/>')
});



let telefono = '(406) 459-0000';

alert(telefono);

