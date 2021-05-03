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

//-------------DOM------------

const padre = document.getElementById('sectionMain')
const reference = document.getElementsByClassName('div')[0]

const play = document.getElementById('playGame')






const character = [{
        id: "obj1",
        number: "1",
        foto: cardPhoto1
    }, //1
    {
        id: "obj2",
        number: "2",
        foto: cardPhoto2
    }, //2
    {
        id: "obj3",
        number: "3",
        foto: cardPhoto3

    }, //3
    {
        id: "obj4",
        number: "4",
        foto: cardPhoto4
    }, //4
    {
        id: "obj5",
        number: "5",
        foto: cardPhoto5
    },
    {
        id: "obj6",
        number: "6",
        foto: cardPhoto6
    },
    { //6
        id: "obj7",
        number: "7",
        foto: cardPhoto7
    },
    { //7
        id: "obj8",
        number: "8",
        foto: cardPhoto8
    },
    { //8
        id: "obj9",
        number: "9",
        foto: cardPhoto9
    },
    { //10
        id: "obj10",
        number: "10",
        foto: cardPhoto10
    },
    { //1 clones
        id: "clon1",
        number: "1",
        foto: cardPhoto1
    },
    { //2
        id: "clon2",
        number: "2",
        foto: cardPhoto2
    },
    { //3
        id: "clon3",
        number: "3",
        foto: cardPhoto3
    },
    { //4
        id: "clon4",
        number: "4",
        foto: cardPhoto4
    },
    { //5
        id: "clon5",
        number: "5",
        foto: cardPhoto5
    },
    { //6
        id: "clon6",
        number: "6",
        foto: cardPhoto6
    },
    { //7
        id: "clon7",
        number: "7",
        foto: cardPhoto7
    },
    { //8
        id: "clon8",
        number: "8",
        foto: cardPhoto8
    },
    { //9
        id: "clon9",
        number: "9",
        foto: cardPhoto9
    },
    { //10
        id: "clon10",
        number: "10",
        foto: cardPhoto10
    },
]



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
    for (var i = 0; i <= 19; i++) {
        const element = document.createElement("img")
        element.setAttribute("src", `${character[i].foto}`)
        element.setAttribute("class", "uknowCard")
        element.setAttribute("data-id", `${character[i].number}`)
        element.setAttribute("id", `${character[i].id}`)
        padre.insertBefore(element, reference)

        /*  const idFoto = `${character[i].id}` */

        function teste() {
            if (element.classList.contains('uknowCard')) {
                element.classList.remove('uknowCard')
                element.classList.add('testingGame')
            }

        }
        element.addEventListener("click", teste)
    }

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
    const cln1 = document.getElementById('clon1')
    const cln2 = document.getElementById('clon2')
    const cln3 = document.getElementById('clon3')
    const cln4 = document.getElementById('clon4')
    const cln5 = document.getElementById('clon5')
    const cln6 = document.getElementById('clon6')
    const cln7 = document.getElementById('clon7')
    const cln8 = document.getElementById('clon8')
    const cln9 = document.getElementById('clon9')
    const cln10 = document.getElementById('clon10')

    //--------------BOTON CARD------------

    card1.addEventListener("click", function() { elegirCartas(card1) })
    card2.addEventListener("click", function() { elegirCartas(card2) })
    card3.addEventListener("click", function() { elegirCartas(card3) })
    card4.addEventListener("click", function() { elegirCartas(card4) })
    card5.addEventListener("click", function() { elegirCartas(card5) })
    card6.addEventListener("click", function() { elegirCartas(card6) })
    card7.addEventListener("click", function() { elegirCartas(card7) })
    card8.addEventListener("click", function() { elegirCartas(card8) })
    card9.addEventListener("click", function() { elegirCartas(card9) })
    card10.addEventListener("click", function() { elegirCartas(card10) })
    cln1.addEventListener("click", function() { elegirCartas(cln1) })
    cln2.addEventListener("click", function() { elegirCartas(cln2) })
    cln3.addEventListener("click", function() { elegirCartas(cln3) })
    cln4.addEventListener("click", function() { elegirCartas(cln4) })
    cln5.addEventListener("click", function() { elegirCartas(cln5) })
    cln6.addEventListener("click", function() { elegirCartas(cln6) })
    cln7.addEventListener("click", function() { elegirCartas(cln7) })
    cln8.addEventListener("click", function() { elegirCartas(cln8) })
    cln9.addEventListener("click", function() { elegirCartas(cln9) })
    cln10.addEventListener("click", function() { elegirCartas(cln10) })


    var paso = 0
    let cartaElegida = undefined
    let carta2Elegida = undefined
    let CartaADestapar = undefined
    let Carta2ADestapar = undefined
    let cartasDestapadas = 0

    function win() {
        console.log('ganaste')
        paso = 0
        CartaADestapar.classList.add('destapar')
        let idCarta1 = CartaADestapar.dataset.id

        let idCarta2 = Carta2ADestapar.dataset.id
        Carta2ADestapar.classList.remove('destapar')
        cartaElegida = undefined
        carta2Elegida = undefined
        cartasDestapadas += 2
        if (cartasDestapadas === 19) {
            swal('¡Ganaste!', 'Tiempo transcurrido: ' + time + ' minutos', 'success')
            stopTime()
            timeGame.classList.add('out')
        }
    }

    function taparCarta() {
        CartaADestapar.src = 'https://th.bing.com/th/id/R874ef0d7a53f4ecb3bf9af116e4b31f0?rik=mmAQjIxg8QBFVA&pid=ImgRaw'
        Carta2ADestapar.src = 'https://th.bing.com/th/id/R874ef0d7a53f4ecb3bf9af116e4b31f0?rik=mmAQjIxg8QBFVA&pid=ImgRaw'
    }

    function agregarClases() {
        CartaADestapar.classList.add('cartaEquivocada')
        Carta2ADestapar.classList.add('cartaEquivocada')
    }

    function removerClases() {
        CartaADestapar.classList.remove('cartaEquivocada')
        Carta2ADestapar.classList.remove('cartaEquivocada')
    }

    function lose() {
        console.log('perdiste')
        agregarClases()
        setTimeout(removerClases, 100)
        setTimeout(taparCarta, 1000)
        cartaElegida = undefined
        carta2Elegida = undefined
        paso = 0
    }


    function elegirCartas(card) {
        if (cartaElegida !== undefined) {
            carta2Elegida = Number(card.dataset.id)
            console.log('Segunda Carta es: ' + carta2Elegida)
            Carta2ADestapar = card
            paso++

            card.src = `${character[`${carta2Elegida}`].foto}`

        } else {
            let destaparCarta = card.foto
            cartaElegida = Number(card.dataset.id)
            console.log('Primera Carta es: ' + cartaElegida)
            CartaADestapar = card
            paso++

            card.src = `${character[`${cartaElegida}`].foto}`
        }

        if (paso == 2) {
            if (CartaADestapar.id === Carta2ADestapar.id) {
                lose()
            }

            if (cartaElegida === carta2Elegida) {
                win()
            } else {
                lose()
            }
        }
    }
}


playGame.addEventListener("click", insertAllImg)




















/* card1.addEventListener("click", gameGo(card1))

cln1.addEventListener("click", gameGo(cln1))

function gameGo(card) {
    if (ca) {
        
    }
} */