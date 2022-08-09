'use strict';

class Persona
{
    constructor(nombre, apellido)
    {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get getNombre()
    {
        return this.nombre;
    }

    get getApellido()
    {
        return this.apellido;
    }

    set setNombre(nombre)
    {
        this.nombre = nombre;
    }

    set setApellido(apellido)
    {
        this.apellido = apellido;
    }
}

const boton = document.getElementById("boton");
boton.addEventListener("click", listar);

const personas = [];              

function listar(){

    let nombre;
    let apellido;
    let texto = "";

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;

    if(nombre.length >0 && apellido.length >0)
    {
        let nuevaPersona = new Persona(nombre, apellido);

        personas.push(nuevaPersona);

        for(let persona of personas){
            texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
        }

        document.getElementById("listado").innerHTML = texto;
    }
}
