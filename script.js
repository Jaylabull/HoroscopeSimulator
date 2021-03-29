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




