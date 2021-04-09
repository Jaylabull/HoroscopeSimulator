var button = document.getElementById('submit-btn');
var usersName = document.getElementById('name-input').value


const form = document.getElementById('form');

button.addEventListener('click', function (event) {
    var selectZodiac = document.querySelector('#zodiac');
    var selectedZodiacValue = selectZodiac.options[selectZodiac.selectedIndex].value;
    const container = document.getElementById('horoscope-card');

    event.preventDefault();

    while (container.firstChild) {

        container.removeChild(container.firstChild)
    }


    function addContent(data) {


        console.log(data);


        container.style.visibility = 'visible';
        var horoscopediv = document.createElement('div')

        // alert(selectedZodiacValue);
        var image = document.createElement('img')
        image.src = 'resources/Zodiac_practice_pic.jpeg'
        horoscopediv.appendChild(image)

        var sign = document.createElement('h2')
        sign.innerHTML = selectedZodiacValue
        horoscopediv.appendChild(sign)

        var dateRange = document.createElement('h2')
        dateRange.innerHTML = data.date_range
        horoscopediv.appendChild(dateRange)

        var horoscope = document.createElement('h4')
        horoscope.innerHTML = data.description
        horoscopediv.appendChild(horoscope)

        var color = document.createElement('h4')
        color.innerHTML = data.color
        horoscopediv.appendChild(color)

        var mood = document.createElement('h4')
        mood.innerHTML = data.mood
        horoscopediv.appendChild(mood)

        container.appendChild(horoscopediv)

    }



    fetch(`https://aztro.sameerkumar.website/?sign=${selectedZodiacValue}&day=today`, {
        method: 'POST'
    })

        .then(reply => reply.json())

        .then(data => addContent(data))

        .catch(err => alert('Missing data, enter all information.'))

});



