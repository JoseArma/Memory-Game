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

const character = [{
        id: "obj1",
        name: 'rick',
        foto: cardPhoto1
    }, //1
    {
        id: "obj2",
        name: 'morty',
        foto: cardPhoto2
    }, //2
    {
        id: "obj3",
        name: 'morty',
        foto: cardPhoto3

    }, //3
    {
        id: "obj4",
        name: 'morty',
        foto: cardPhoto4
    }, //4
    {
        id: "obj5",
        name: 'morty',
        foto: cardPhoto5
    },
    {
        id: "obj5",
        name: 'morty',
        foto: cardPhoto6
    },
    { //6
        id: "obj6",
        name: 'morty',
        foto: cardPhoto7
    },
    { //7
        id: "obj7",
        name: 'morty',
        foto: cardPhoto8
    },
    { //8
        id: "obj9",
        name: 'morty',
        foto: cardPhoto9
    },
    { //10
        id: "obj10",
        name: 'morty',
        foto: cardPhoto10
    },
    { //1
        id: "obj1",
        name: 'morty',
        foto: cardPhoto1
    },
    { //2
        id: "obj2",
        name: 'morty',
        foto: cardPhoto2
    },
    { //3
        id: "obj3",
        name: 'morty',
        foto: cardPhoto3
    },
    { //4
        id: "obj4",
        name: 'morty',
        foto: cardPhoto4
    },
    { //5
        id: "obj5",
        name: 'morty',
        foto: cardPhoto5
    },
    { //6
        id: "obj6",
        name: 'morty',
        foto: cardPhoto6
    },
    { //7
        id: "obj7",
        name: 'morty',
        foto: cardPhoto7
    },
    { //8
        id: "obj8",
        name: 'morty',
        foto: cardPhoto8
    },
    { //9
        id: "obj9",
        name: 'morty',
        foto: cardPhoto9
    },
    { //10
        id: "obj1",
        name: 'morty',
        foto: cardPhoto10
    },
]



function insertAllImg() {
    var j, x, i;
    for (i = character.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = character[i];
        character[i] = character[j];
        character[j] = x;
    }
    for (var i = 0; i <= 19; i++) {
        const element = document.createElement("img")
        element.setAttribute("src", `${character[i].foto}`)
        element.setAttribute("class", "uknowCard")
        element.setAttribute("id", `${character[i].id}`)
        padre.insertBefore(element, reference)

        function teste() {
            if (element.classList.contains('uknowCard')) {
                element.classList.remove('uknowCard')
            }
        }

        element.addEventListener("click", teste)
    }
    playGame.setAttribute("class", "hiden")

}

playGame.addEventListener("click", insertAllImg)