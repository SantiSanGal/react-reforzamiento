/*
Interface 
    representacion de como quiero que luzca el objeto,
    las interfaces mandan sobre la definición de los objetos.
    NO SIRVEN PARA CREAR INSTANCIAS, para eso son las Clases,
    sirven para crear reglas de validación a los objetos
*/

interface Persona {
    nombreCompleto: string;
    edad: number;
/*  usualmente no se crean objetos en las interfaces
    direccion: {
        continente: string;
        calle: number;
    }
*/
    direccion: Direccion;
}

interface Direccion {
    continente: string;
    calle: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: "Santiago",
        edad: 22,
        direccion: {
            continente: "America",
            calle: 615
        }
    }

    

  return (
    <>
        <h3>ObjetosLiterales</h3>
        <code>
            <pre>
                { JSON.stringify( persona, null, 2) }
            </pre>
        </code>
    </>
  )
}