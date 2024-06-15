let url = 'https://jsonmock.hackerrank.com/api/countries?name=';

const searchField = document.querySelector(".search-field"),
    searchBtn = document.querySelector(".icon"),
    flagImg = document.querySelector(".flag"),
    Img = document.querySelector(".image-box"),
    countryDetails = document.querySelector(".country-details"),
    error = document.querySelector(".error"),
    callCode = document.querySelector(".calling-code"),
    population = document.querySelector(".population"),
    area = document.querySelector(".area"),
    city = document.querySelector(".city"),
    region = document.querySelector(".region"),
    country = document.querySelector(".country"),
    currency = document.querySelector(".currency");


    async function getInformation(countryName) {
        let response = await fetch(url + countryName);
        let data = await response.json();
        console.log(data);
        if (data.data.length == 0) {
            error.style.display = "block";
            countryDetails.style.display = "none";
            Img.style.display = "none";
    }
    else {
        error.style.display = "none";
        callCode.innerHTML = data.data[0].callingCodes[0];
        population.innerHTML = data.data[0].population;
        area.innerHTML = data.data[0].area;
        city.innerHTML = data.data[0].capital;
        region.innerHTML = data.data[0].region;
        country.innerHTML = data.data[0].altSpellings[2];
        currency.innerHTML = data.data[0].currencies[0];
        let countryAlphaCode = data.data[0].alpha2Code;
        flagImg.src = `https://countryflagsapi.netlify.app/flag/${countryAlphaCode}.svg`
        countryDetails.style.display = "flex";
        Img.style.display = "flex";
    }
}
searchBtn.addEventListener("click", () => {
    getInformation(searchField.value)
})