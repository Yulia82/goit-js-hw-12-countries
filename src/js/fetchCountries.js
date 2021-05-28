export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    // .then((response) => {
    //     return response.json();
    //     })
        .then((response) => {
            if (response.ok) { // если HTTP-статус в диапазоне 200-299
            return response.json();
            } else {
            alert("Ошибка HTTP: " + response.status);
            }
        })
}