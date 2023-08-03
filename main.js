const $people = document.querySelector(".main__people");

const URL = 'https://swapi.dev/api/';

async function getPeople() {
    const response = await fetch(URL + "people");
    if (response.status !== 200) {
        throw new Error("Error status")
    }
    console.log(response);
    const people = await response.json();

    console.log(people);
}

getPeople();