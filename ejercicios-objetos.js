//  ** EJERCICIO 1
const user = {
    firstName: "Florencia",
    lastName: "Pezcara",
    email: "fpezcara@gmail.com",
    edad: 28,
}

console.log(user)

console.log("Hola, mi nombre es " + user.firstName + " y tengo " + user.edad + " años")

//  ** EJERCICIO 2

const usuarioAda = {
    id: 1,
    email: "ada@gmail.com",
    nombre: "Ada Lovelace",
    telefono: 1234567890,
}

const usuarioGrace = {
    id: 2,
    email: "grace@hotmail.com",
    nombre: "Grace Hopper",
    telefono: 0987654321,
}

const usuarioHedy = {
    id: 3,
    email: "hedy@gmail.com",
    nombre: "Hedy Lamarr",
    telefono: 6789054321,
}

const usuarioRadia = {
    id: 4,
    email: "radia@yahoo.com",
    nombre: "Radia Perlman",
    telefono: 1234509876,
}

const usuarioSheryl = {
    id: 5,
    email: "sheryl@facebook.com",
    nombre: "Sheryl Sandberg",
    telefono: 5432167890,
}


// **EJERCICIO 3

// Con los objetos creados en el ejercicio anterior, mostrar en la consola los siguientes datos de cada persona:
// 1. El nombre de Ada: 
console.log("1. El nombre de Ada: " + usuarioAda.nombre)

// 2. El ID de Grace
console.log("2. El ID de Grace: " + usuarioGrace.id)

// 3. El email de Hedy
console.log("3. El email de Hedy: " + usuarioHedy.email)

// 4. El ID y nombre de Radia
console.log("El ID y nombre de Radia: " + usuarioRadia.id + ", " + usuarioRadia.nombre)

// 5. El telefono de Sheryl
console.log("El teléfono de Sheryl: " + usuarioSheryl.telefono)

// **EJERCICIO 4

const disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
      nombre: 'Foo Fighters',
      anioFormacion: 1994
    }
  };
  
  console.log(`El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzó en el año ${disco.anioLanzamiento}`)
//   Mostrar en consola el siguiente mensaje usando las propiedades del objeto:
//   El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011
  
// **EJERCICIO 5
// Crear un array llamado tecnologiasConocidas donde se listen las tecnologias que aprendiste durante el curso y las que ya supieras de antes

let tecnologiasConocidas = ["github", "slack", "node", "Visual Studio Code"]


// Agregar al objeto creado en el ejercicio 1 dos propiedades:

user.sabeProgramar = true;

user.tecnologiasConocidas = tecnologiasConocidas;

console.log(user)


