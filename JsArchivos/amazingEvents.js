let showCardContainer = document.getElementById('showCards')
console.log(showCardContainer)
let stringHtml = ""

let arrayConEventos = data.events
for (events of arrayConEventos) {
    if(events.date > data.currentDate)
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
for(dateEvents of arrayConEventos){
    
}