const cardPhoto1 = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
const cardPhoto2 = "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
const cardPhoto3 = "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
const cardPhoto4 = "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
const cardPhoto5 = "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
const cardPhoto6 = "https://rickandmortyapi.com/api/character/avatar/6.jpeg"
const cardPhoto7 = "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
const cardPhoto8 = "https://rickandmortyapi.com/api/character/avatar/8.jpeg"
const cardPhoto9 = "https://rickandmortyapi.com/api/character/avatar/9.jpeg"
const cardPhoto10 = "https://rickandmortyapi.com/api/character/avatar/10.jpeg"
const cardPhoto11 = "https://rickandmortyapi.com/api/character/avatar/11.jpeg"
const cardPhoto12 = "https://rickandmortyapi.com/api/character/avatar/12.jpeg"
const cardPhoto13 = "https://rickandmortyapi.com/api/character/avatar/13.jpeg"
const cardPhoto14 = "https://rickandmortyapi.com/api/character/avatar/14.jpeg"
const cardPhoto15 = "https://rickandmortyapi.com/api/character/avatar/15.jpeg"
const cardPhoto16 = "https://rickandmortyapi.com/api/character/avatar/16.jpeg"
const cardPhoto17 = "https://rickandmortyapi.com/api/character/avatar/17.jpeg"
const cardPhoto18 = "https://rickandmortyapi.com/api/character/avatar/18.jpeg"
const cardPhoto19 = "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
const cardPhoto20 = "https://rickandmortyapi.com/api/character/avatar/20.jpeg"


//-------------DOM------------

const padre = document.getElementById('sectionMain')
const reference = document.getElementsByClassName('div')[0]
const play = document.getElementById('playGame')



const character = [{
        /*  id: "obj1", */
        id: "0",
        foto: cardPhoto1
    }, //1
    {
        /*  id: "obj2", */
        id: "1",
        foto: cardPhoto2
    }, //2
    {
        /* id: "obj3", */
        id: "2",
        foto: cardPhoto3

    }, //3
    {
        /*  id: "obj4", */
        id: "3",
        foto: cardPhoto4
    }, //4
    {
        /*    id: "obj5", */
        id: "4",
        foto: cardPhoto5
    },
    {
        /*  id: "obj6", */
        id: "5",
        foto: cardPhoto6
    },
    { //6
        /*   id: "obj7", */
        id: "6",
        foto: cardPhoto7
    },
    { //7
        /*  id: "obj8", */
        id: "7",
        foto: cardPhoto8
    },
    { //8
        /*  id: "obj9", */
        id: "8",
        foto: cardPhoto9
    },
    { //10
        /*   id: "obj10", */
        id: "9",
        foto: cardPhoto10
    },
    { //1 clones
        /* id: "obj11", */
        id: "10",
        foto: cardPhoto11
    },
    { //2
        /*    id: "obj12", */
        id: "11",
        foto: cardPhoto12
    },
    { //3
        /* id: "obj13", */
        id: "12",
        foto: cardPhoto13
    },
    { //4
        /* id: "obj14", */
        id: "13",
        foto: cardPhoto14
    },
    { //5
        /*  id: "obj15", */
        id: "14",
        foto: cardPhoto15
    },
    { //6
        /* id: "obj16", */
        id: "15",
        foto: cardPhoto16
    },
    { //7
        /* id: "obj17", */
        id: "16",
        foto: cardPhoto17
    },
    { //8
        /* id: "obj18", */
        id: "17",
        foto: cardPhoto18
    },
    { //9
        /*   id: "obj19", */
        id: "18",
        foto: cardPhoto19
    },
    { //10
        /*  id: "obj20", */
        id: "19",
        foto: cardPhoto20
    },
]

let clones = []
let objetos = []
let fork


const numeroDeCartas = character.length
const niveles = numeroDeCartas


const numeroRandom = () => {
    const numero = Math.floor(Math.random() * (niveles - 1)) + 1
    return numero
}

let id = numeroRandom()

const agregarobjetosAArray = () => {
    id = numeroRandom()
    if (!objetos.includes(id)) {
        objetos.push(id)
    }

    if (!clones.includes(id)) {
        clones.push(id)
    }
}


const agregarNuevosPersonajes = () => {
    for (let i = 0; i < 20; i++) {
        while (objetos.length < 10) {
            agregarobjetosAArray()
            fork = objetos.concat(clones)
            fork.sort(() => Math.random() - 0.5);
        }

        let Q = fork[i]
        padre.innerHTML += `<img src='https://th.bing.com/th/id/R874ef0d7a53f4ecb3bf9af116e4b31f0?rik=mmAQjIxg8QBFVA&pid=ImgRaw' alt="Carta de ${character[Q].name}" onclick="chooseGamecard(card${[i+1]})" data-id="${character[Q].id}" class="card-img" id="card${i+1}"> `

        playGame.setAttribute("class", "hiden")


        //--------------BOTON CARD------------
        const card1 = document.getElementById('obj1')
        const card2 = document.getElementById('obj2')
        const card3 = document.getElementById('obj3')
        const card4 = document.getElementById('obj4')
        const card5 = document.getElementById('obj5')
        const card6 = document.getElementById('obj6')
        const card7 = document.getElementById('obj7')
        const card8 = document.getElementById('obj8')
        const card9 = document.getElementById('obj9')
        const card10 = document.getElementById('obj10')
        const card11 = document.getElementById('obj11')
        const card12 = document.getElementById('obj12')
        const card13 = document.getElementById('obj13')
        const card14 = document.getElementById('obj14')
        const card15 = document.getElementById('obj15')
        const card16 = document.getElementById('obj16')
        const card17 = document.getElementById('obj17')
        const card18 = document.getElementById('obj18')
        const card19 = document.getElementById('obj19')
        const card20 = document.getElementById('obj20')



    }


}


let stepPlay = 0
let cardChoose = undefined
let card2choose = undefined
let foldCard = undefined
let foldcard2 = undefined
let numFold = 0

function YouWin() {
    console.log('ganaste')
    stepPlay = 0
    foldCard.classList.add('destapar')
    let idcard1 = foldCard.dataset.id

    let idcard2 = foldcard2.dataset.id
    foldcard2.classList.remove('destapar')
    cardChoose = undefined
    card2choose = undefined
    numFold += 2
    if (numFold === 20) {
        swal("Ganaste!", "Que inteligente eres :D!", "success")

    }
}

function taparCarta() {
    foldCard.src = 'https://th.bing.com/th/id/R874ef0d7a53f4ecb3bf9af116e4b31f0?rik=mmAQjIxg8QBFVA&pid=ImgRaw'
    foldcard2.src = 'https://th.bing.com/th/id/R874ef0d7a53f4ecb3bf9af116e4b31f0?rik=mmAQjIxg8QBFVA&pid=ImgRaw'
}

function agregarClases() {
    foldCard.classList.add('wrong')
    foldcard2.classList.add('wrong')
}

function removerClases() {
    foldCard.classList.remove('wrong')
    foldcard2.classList.remove('wrong')
}

function luser() {
    console.log('perdiste')
    agregarClases()
    setTimeout(removerClases, 100)
    setTimeout(taparCarta, 1000)
    cardChoose = undefined
    card2choose = undefined
    stepPlay = 0
}


function chooseGamecard(card) {
    if (cardChoose !== undefined) {
        card2choose = Number(card.dataset.id)
        foldcard2 = card
        stepPlay++
        card.src = `${character[`${card2choose}`].foto}`
     
             } else {
                 let cardCover = card.foto
                 cardChoose = Number(card.dataset.id)
                 foldCard = card
                 stepPlay++
     
                 card.src = `${character[`${cardChoose}`].foto}`
             }
     
             if (stepPlay == 2) {
                 if (foldCard.id === foldcard2.id) {
                     luser()
                 }
                 if (cardChoose === card2choose) {
                     YouWin()
                 } else {
                     luser()
                 }
             }
         }
      
     

 playGame.addEventListener("click", agregarNuevosPersonajes) 








//BASURA--------------------------






    /*  const cln1 = document.getElementById('cln1')
             const cln2 = document.getElementById('cln2')
             const cln3 = document.getElementById('cln3')
             const cln4 = document.getElementById('cln4')
             const cln5 = document.getElementById('cln5')
             const cln6 = document.getElementById('cln6')
             const cln7 = document.getElementById('cln7')
             const cln8 = document.getElementById('cln8')
             const cln9 = document.getElementById('cln9')
             const cln10 = document.getElementById('cln10') */


        //--------------BOTON CARD------------
        /*   window.onload = function() {
                  card1.addEventListener("click", function() { chooseGamecard(card1) })
                  card2.addEventListener("click", function() { chooseGamecard(card2) })
                  card3.addEventListener("click", function() { chooseGamecard(card3) })
                  card4.addEventListener("click", function() { chooseGamecard(card4) })
                  card5.addEventListener("click", function() { chooseGamecard(card5) })
                  card6.addEventListener("click", function() { chooseGamecard(card6) })
                  card7.addEventListener("click", function() { chooseGamecard(card7) })
                  card8.addEventListener("click", function() { chooseGamecard(card8) })
                  card9.addEventListener("click", function() { chooseGamecard(card9) })
                  card10.addEventListener("click", function() { chooseGamecard(card10) })
                  card11.addEventListener("click", function() { chooseGamecard(card11) })
                  card12.addEventListener("click", function() { chooseGamecard(card12) })
                  card13.addEventListener("click", function() { chooseGamecard(card13) })
                  card14.addEventListener("click", function() { chooseGamecard(card14) })
                  card15.addEventListener("click", function() { chooseGamecard(card15) })
                  card16.addEventListener("click", function() { chooseGamecard(card16) })
                  card17.addEventListener("click", function() { chooseGamecard(card17) })
                  card18.addEventListener("click", function() { chooseGamecard(card18) })
                  card19.addEventListener("click", function() { chooseGamecard(card19) })
                  card20.addEventListener("click", function() { chooseGamecard(card20) })
              } */
        /* 
        const removeEvent = () => {
            card1.removeEventListener("click", function() { chooseGamecard(card1) })
            card2.removeEventListener("click", function() { chooseGamecard(card2) })
            card3.removeEventListener("click", function() { chooseGamecard(card3) })
            card4.removeEventListener("click", function() { chooseGamecard(card4) })
            card5.removeEventListener("click", function() { chooseGamecard(card5) })
            card6.removeEventListener("click", function() { chooseGamecard(card6) })
            card7.removeEventListener("click", function() { chooseGamecard(card7) })
            card8.removeEventListener("click", function() { chooseGamecard(card8) })
            card9.removeEventListener("click", function() { chooseGamecard(card9) })
            card10.removeEventListener("click", function() { chooseGamecard(card10) })
            /*  cln1.removeEventListener("click", function() { chooseGamecard(cln1) })
            cln2.removeEventListener("click", function() { chooseGamecard(cln2) })
                         cln3.removeEventListener("click", function() { chooseGamecard(cln3) })
                         cln4.removeEventListener("click", function() { chooseGamecard(cln4) })
                         cln5.removeEventListener("click", function() { chooseGamecard(cln5) })
                         cln6.removeEventListener("click", function() { chooseGamecard(cln6) })
                         cln7.removeEventListener("click", function() { chooseGamecard(cln7) })
                         cln8.removeEventListener("click", function() { chooseGamecard(cln8) })
                         cln9.removeEventListener("click", function() { chooseGamecard(cln9) })
                         cln10.removeEventListener("click", function() { chooseGamecard(cln10) }) */




/* //mi metodo
function insertAllImg() {
    //RECORRER ARRAY
    var j, x, v;
    for (v = character.length - 1; v > 0; v--) {
        j = Math.floor(Math.random() * (v + 1));
        x = character[v];
        character[v] = character[j];
        character[j] = x;
    }
    //NSERTAR CARTAS NO REPETIDAS
    for (var i = 0; i < 20; i++) {
        const element = document.createElement("img")
        element.setAttribute("src", `${character[i].foto}`)
        element.setAttribute("class", "uknowCard")
        element.setAttribute("data-id", `${character[i].number}`)
        element.setAttribute("id", `${character[i].id}`)
        padre.insertBefore(element, reference)

        /*  const idFoto = `${character[i].id}` */






/* 
var stepPlay = 0
let cardChoose = undefined
let card2choose = undefined
let foldCard = undefined
let foldcard2 = undefined
let numFold = 0

function YouWin() {
    console.log('ganaste')
    stepPlay = 0
    foldCard.classList.add('destapar')
    let idcard1 = foldCard.dataset.id

    let idcard2 = foldcard2.dataset.id
    foldcard2.classList.remove('destapar')
    cardChoose = undefined
    card2choose = undefined
    numFold += 2
    if (numFold === 19) {
        swal('¡Ganaste!')
        stopTime()
        timeGame.classList.add('out')
    }
}

function taparCarta() {
    foldCard.src = 'https://th.bing.com/th/id/R874ef0d7a53f4ecb3bf9af116e4b31f0?rik=mmAQjIxg8QBFVA&pid=ImgRaw'
    foldcard2.src = 'https://th.bing.com/th/id/R874ef0d7a53f4ecb3bf9af116e4b31f0?rik=mmAQjIxg8QBFVA&pid=ImgRaw'
}

function agregarClases() {
    foldCard.classList.add('wrong')
    foldcard2.classList.add('wrong')
}

function removerClases() {
    foldCard.classList.remove('wrong')
    foldcard2.classList.remove('wrong')
}

function luser() {
    console.log('perdiste')
    agregarClases()
    setTimeout(removerClases, 100)
    setTimeout(taparCarta, 1000)
    cardChoose = undefined
    card2choose = undefined
    stepPlay = 0
}


function chooseGamecard(card) {
    if (cardChoose !== undefined) {
        card2choose = Number(card.dataset.id)
        foldcard2 = card
        stepPlay++
        card.src = `${character[`${card2choose}`].foto}`

        } else {
            let cardCover = card.foto
            cardChoose = Number(card.dataset.id)
            foldCard = card
            stepPlay++

            card.src = `${character[`${cardChoose}`].foto}`
        }

        if (stepPlay == 2) {
            if (foldCard.id === foldcard2.id) {
                luser()
            }
            if (cardChoose === card2choose) {
                YouWin()
            } else {
                luser()
            }
        }
    }

playGame.addEventListener("click", agregarNuevosPersonajes) */