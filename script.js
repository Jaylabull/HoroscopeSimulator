var button = document.getElementById('submit-btn');
var usersName = document.getElementById('name-input').value


const container = document.getElementsByClassName('container');
const form = document.getElementById('form');

button.addEventListener('click', function (event) {
    var selectZodiac = document.querySelector('#zodiac');
    var selectedZodiacValue = selectZodiac.options[selectZodiac.selectedIndex].value;


    event.preventDefault();


    function addContent(data) {

        // console.log(data);


        data.forEach(data => {
         var {date_range, description, color, mood} = data;

        const horoscope = document.createElement('div');
        horoscope.classList.add('horoscope-card');
        horoscope.innerHTML = `<div class="horoscope-card">
        <img src="resources/Zodiac_practice_pic.jpeg" alt="zodiac sign image">
        <h2 class = "zodiac-sign">Zodiac sign</h2>
        <h2 class="${date_range}"></h2>
        <h4 class = "horoscope">Horoscope</h4>
         ${description}
        <h4 class = "color">Today's Color</h4> 
        ${color}
        <h4 class = "mood">Today's Mood</h4>
        ${mood}
        </div>`

        container.appendChild(horoscope);
    })
    }


        // alert(selectedZodiacValue);

        // var dateRange = document.createElement('p')
        // dateRange.innerHTML = data.date_range
        // document.body.appendChild(dateRange)

        // var horoscope = document.createElement('p')
        // horoscope.innerHTML = data.description
        // document.body.appendChild(horoscope)

        // var color = document.createElement('p')
        // color.innerHTML = data.color
        // document.body.appendChild(color)

        // var mood = document.createElement('p')
        // mood.innerHTML = data.mood
        // document.body.appendChild(mood)  





    fetch(`https://aztro.sameerkumar.website/?sign=${selectedZodiacValue}&day=today`, {
        method: 'POST'
    })

        .then(reply => reply.json())

        .then(data => addContent(data))

        .catch(err => alert('Missing data, enter all information.'))

});



