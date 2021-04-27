const imagen1 = "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
const imagen2 = "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
const imagen3 = "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
const imagen4 = "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
const imagen5 = "https://rickandmortyapi.com/api/character/avatar/5.jpeg"




const card1 = document.getElementById('card-img1')
const card2 = document.getElementById('card-img2')
const card3 = document.getElementById('card-img3')
const card4 = document.getElementById('card-img4')
const card5 = document.getElementById('card-img5')
const card6 = document.getElementById('card-img6')
const card7 = document.getElementById('card-img7')
const card8 = document.getElementById('card-img8')
const card9 = document.getElementById('card-img9')
const card10 = document.getElementById('card-img10')
const card11 = document.getElementById('card-img11')
const card12 = document.getElementById('card-img12')


const padre = document.getElementById('sectionMain')
const reference = document.getElementsByClassName('div')[0]




const play = document.getElementById('playGame')

const personajes = [{
        id: 1,
        name: 'rick',
        foto: imagen1
    }, //1
    {
        id: 2,
        name: 'morty',
        foto: imagen2
    }, //2
    {
        id: 3,
        name: 'morty',
        foto: imagen3

    }, //3
    {
        id: 4,
        name: 'morty',
        foto: imagen4
    }, //4
    {
        id: 5,
        name: 'morty',
        foto: imagen5
    }
]

function insertImg() {
    let element = document.createElement("img")
    element.setAttribute("src", "https://rickandmortyapi.com/api/character/avatar/2.jpeg")
    padre.insertBefore(element, reference)
}




playGame.addEventListener("click", insertImg)









/* function randomImage() {
    let operation = Math.floor(Math.random() * (personajes.length))
    seleccion = personajes[operation.foto]
    let successful = padre.insertBefore(seleccion   )
    return successful
} */




















/* function cambiaImagen() {
    let personajes = new Array(3);
    personajes[0] = "imagen1"
    personajes[1] = "imagen2"
    personajes[2] = "imagen3"
    let aleatorio = Math.floor(Math.random() * (personajes.length))
    document.getElementById('imagen_aleatoria').src = aleatorio
}

const botonplay = document.getElementById('boton-action')

botonplay.addEventListener("click", cambiaImagen)

 */







/* const personajes = new array(3)
personajes[0] = "imagen1"
personajes[1] = "imagen3"
personajes[2] = "imagen3"

const random = Math.random() * (personajes.length)

 */













/* const section = document.getElementById('sectionMain')

const div = document.getElementById('buttonHere')



document.innerHTML = "<a href='#' id='card-img1'> <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' class='img-card' ></a> <button class = 'img-card'> Jugar </button>" */