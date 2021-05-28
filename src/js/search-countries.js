import renderCountries from '../templates/list-countries.hbs'
import renderCountry from '../templates/one-country.hbs'
import debounce from 'lodash.debounce'
import fetchCountries from './fetchCountries'

const containerCountries = document.querySelector('.js-countries');
const inputNameCountry = document.querySelector('#input-name-country');

inputNameCountry.addEventListener('input', debounce(onSearch, 1000));

function onSearch() {
    fetchCountries(inputNameCountry.value).then(contentOutput);
}

// функция отрисовки контента
function contentOutput(countries) {
    if (countries.length > 2 && countries.length <= 10) {
            containerCountries.innerHTML = renderCountries(countries);
            inputNameCountry.value = '';
        }

        if (countries.length === 1) {
            containerCountries.innerHTML = renderCountry(countries);
            inputNameCountry.value = '';
        }

         if (countries.length > 10) {
             console.log('Введите запрос точнее');
        }   
}

