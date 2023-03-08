let contenedor = document.getElementById("contenedor")

// for (let i = 0; i < data.events.length; i++) {

//     let div = document.createElement("div")
//     let parrafo = document.createElement("p")
//     parrafo.innerText = data.events[i]
//     div.appendChild(parrafo)
//     console.log(data.events)

//     contenedor.appendChild(div)

// }

let showCardContainer = document.getElementById('showCards')
console.log(showCardContainer)
let stringHtml = ""

for (events of data.events) {
    stringHtml += `
    <div class="card" id="card1">
    <figure>
        <img src="${events.image}" alt="">
    </figure>
    <div class="contenido">
        <h3>${events.name}</h3>
        <p>${events.description}</p>
        <p>Price: $${events.price}<a href="">Load More</a></p>
    </div>
    </div>`
}
showCardContainer.innerHTML += stringHtml


// let showCard = document.getElementById('card1');

// showCard.classList += ' blue'
// showCard.innerHTML = "<h2> Contenido principal</h2><p>Terrible parrafo papaaa</p>"

// console.log(showCard)


// let card = document.createElement('div')
    // card.classList.add("card")
    // card.style.width = "18rem"

    // let imagen = document.createElement("img")

    // imagen.src = "/assets/img/Marathon.jpg"

    // let div = document.createElement("div")

    // div.innerHTML = `<div class="card">
    // <div class="contenido">
    //      <h3>${events.name}</h3>
    //      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    //      <p>Price: $10000 <a href="">Load More</a></p>
    //  </div>`


    // card.appendChild(imagen)
    // card.appendChild(div)
    
    // showCardContainer.appendChild(card)