var button = document.getElementById('submit-btn');
var usersName = document.getElementById('name-input').value

button.addEventListener('click', function (event) {
    var selectZodiac = document.querySelector('#zodiac');
    var selectedZodiacValue = selectZodiac.options[selectZodiac.selectedIndex].value;


    event.preventDefault();


    function addContent(data) {

        console.log(data);


        alert(selectedZodiacValue);

        var dateRange = document.createElement('p')
        dateRange.innerHTML = data.date_range
        document.body.appendChild(dateRange)

        var horoscope = document.createElement('p')
        horoscope.innerHTML = data.description
        document.body.appendChild(horoscope)

        var color = document.createElement('p')
        color.innerHTML = data.color
        document.body.appendChild(color)

        var mood = document.createElement('p')
        mood.innerHTML = data.mood
        document.body.appendChild(mood)  
    }




    fetch(`https://aztro.sameerkumar.website/?sign=${selectedZodiacValue}&day=today`, {
        method: 'POST'
    })

        .then(reply => reply.json())

        .then(data => addContent(data))

        .catch(err => alert('Missing data, enter all information.'))

});



