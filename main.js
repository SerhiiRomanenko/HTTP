const $container = document.querySelector(".row");

let xhr = new XMLHttpRequest();
xhr.open("get", "http://swapi.dev/api/planets/");
xhr.send();

xhr.addEventListener('error', (event) => {
    console.log(event);
});

xhr.addEventListener('load', (e) => {
    if (e.target.status === 200) {
        console.log('OK');

        const data = JSON.parse(e.target.response);
        console.log(data)
        data.results.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("col", "card");
            div.innerHTML = `
                    <div class="card-body">
                        <h5 class ="card-title">${item.name}</h5>
                        <p class ="card-text">Created: ${item.created}</p>
                    </div>
                    <ul class ="list-group list-group-flush">
                        <li class ="list-group-item"><b>Diameter:</b> ${item.diameter}</li>
                        <li class ="list-group-item"><b>Orbital perioad:</b> ${item.orbital_period}</li>
                        <li class ="list-group-item"><b>Population:</b> ${item.population}</li>
                    </ul>
                    <div class="card-body">
                        <a href="${item.url}" class="card-link btn btn-primary">Planet link</a>
                    </div>
            `;
            $container.append(div);
            // console.log(data.results);
            // console.log(typeof data.results);
        })


    } else if (e.target.status === 404) {
        console.log("Not found")
    }
});
console.log(xhr)