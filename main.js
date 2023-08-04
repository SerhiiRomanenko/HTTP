const $people = document.querySelector(".main__people");
const $buttons = document.querySelector(".main__buttons");


const URL2 = 'https://dummyjson.com';
$buttons.addEventListener("click", async function (event) {
    if (event.target === document.querySelector(".main_get")) {
        try {
            const response = await fetch(URL2 + "/products/categories");
            console.log("GET")
            console.log(response);
            const result = await response.json();
            console.log(result)
        } catch (e) {
            console.log(e);
        }
    } else if (event.target === document.querySelector(".main__add")) {
        try {
            const response = await fetch(URL2 + "/products/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({key: "value"})
            });
            console.log("POST")
            console.log(response);
            const result = await response.json();
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    } else if (event.target === document.querySelector(".main__del")) {
        try {
            const response = await fetch(URL2 + "/users/1", {
                method: "DELETE",
            });
            console.log("DELETE")
            console.log(response);
            const result = await response.json();
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    } else if (event.target === document.querySelector(".main__edit")) {
        try {
            const response = await fetch(URL2 + "/products/2", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({title: "VALUE"}),
            });
            console.log("PUT")
            console.log(response);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    } else if (event.target === document.querySelector(".main__edit2")) {
        try {
            const response = await fetch(URL2 + "/products/1", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({title: "VALUE"}),
            }
            );
            console.log("PATCH");
            console.log(response);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
})