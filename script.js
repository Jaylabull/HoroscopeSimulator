// var API_KEY = "84145c01d8msh2e067ae17a0c02dp164871jsne31ed9b15a09";
// var API_URL = "https://vedicrishi-horoscope-and-astrology-v1.p.rapidapi.com/horo_chart/D1";

var button = document.getElementById('submit-btn');

button.addEventListener('click', function (event) {


    event.preventDefault();

    function addContent(data) {
        console.log(data);
        var horoscope = document.createElement('p')
        horoscope.innerHTML = data.description
        document.body.appendChild(horoscope)

    }



    fetch('https://aztro.sameerkumar.website/?sign=aries&day=today', {
        method: 'POST'
    })


        .then(reply => reply.json())

        .then(data => addContent(data))

        .catch(err => alert('Missing data, enter all information.'))

});




