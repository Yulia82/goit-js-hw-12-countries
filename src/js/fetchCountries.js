export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then((response) => {
        return response.json();
        })
        // .then((dataSearch) => {
        //     return dataSearch;
        // })
        // console.log(countries);
        // console.log(countries.length);
        // if (countries.length > 2 && countries.length <= 10) {
        //     // containerCountries.insertAdjacentHTML('beforeend', renderCountries(countries));
        //     containerCountries.innerHTML = renderCountries(countries);
        //     inputNameCountry.value = '';
        // }

        // if (countries.length === 1) {
        //     // containerCountries.insertAdjacentHTML('beforeend', renderCountry(countries));
        //     containerCountries.innerHTML = renderCountry(countries);
        //     inputNameCountry.value = '';
        // }

        //  if (countries.length > 10) {
        //     console.log('Введите запрос точнее');
        // }   
    // })
}