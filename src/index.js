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

//--------------BOTON CARD------------

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

//-------------DOM------------

const padre = document.getElementById('sectionMain')
const reference = document.getElementsByClassName('div')[0]




const play = document.getElementById('playGame')


const cards = [cardPhoto1, cardPhoto2, cardPhoto3, cardPhoto4, cardPhoto5, cardPhoto6, cardPhoto7, cardPhoto8, cardPhoto9, cardPhoto10, cardPhoto1, cardPhoto2, cardPhoto3, cardPhoto4, cardPhoto5, cardPhoto6, cardPhoto7, cardPhoto8, cardPhoto9, cardPhoto10, ]


function insertAllImg() {
    var j, x, i;
    for (i = cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = cards[i];
        cards[i] = cards[j];
        cards[j] = x;
    }
    for (var i = 0; i <= 19; i++) {
        let element = document.createElement("img")
        element.setAttribute("src", `${cards[i]}`)
        element.setAttribute("class", "action-game")
        padre.insertBefore(element, reference)
    }
    playGame.setAttribute("class", "hiden")
}


playGame.addEventListener("click", insertAllImg)