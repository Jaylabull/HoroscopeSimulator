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


        // console.log(data);
   
        var horoscopediv = document.createElement('div')

        // alert(selectedZodiacValue);
        var name = document.createElement('h1')
        name.innerHTML = `${usersName} horoscope for today!`
        horoscopediv.appendChild(name)

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
        color.innerHTML = `Color: ${data.color}`
        horoscopediv.appendChild(color)

        var mood = document.createElement('h4')
        mood.innerHTML = `Mood: ${data.mood}`
        horoscopediv.appendChild(mood)

        // sign.style.backgroundColor = data.color;
    
        container.appendChild(horoscopediv)

    }

    // function signPic () {
    //   switch (selectedZodiacValue) {
    //     case 'Capricorn (Dec. 22nd - Jan. 19th)':
    //       console.log(image.scr = 'resources/Capricorn.jpeg') 
    //         break;
    //     case 'Aquarius (Jan. 20th - Feb. 18th)':
    //         console.log(image.scr = 'resources/Aquarius.jpeg')
    //         break;
    //     case 'Pisces (Feb. 19th - March 20th)':
    //         console.log(image.scr = 'resources/Pisces.jpeg')
    //         break;
    //     case 'Aries (Mar. 21st - Apr. 19th)':
    //         console.log(image.scr = 'resources/Aries.jpeg')
    //         break;
    //     case 'Taurus (Apr. 20th - May 20th)':
    //         console.log(image.scr = 'resources/Taurus.jpeg')
    //         break;
    //     case 'Gemini (May 21rst - Jun. 20th)':
    //         console.log(image.scr = 'resources/Gemini.jpeg')
    //         break;
    //     case 'Cancer (Jun. 21rst - Jul. 22nd)':
    //         console.log(image.scr = 'resources/Cancer.jpeg')
    //         break;
    //     case 'Leo (Jul. 23rd - Aug. 22nd)':
    //         console.log(image.scr = 'resources/Leo.jpeg')
    //         break;        
    //     case 'Virgo (Aug. 23rd - Sept. 22nd)':
    //         console.log(image.scr = 'resources/Virgo.jpeg')
    //         break;
    //     case 'Libra (Sept. 23rd - Oct. 22nd)':
    //         console.log(image.scr = 'resources/Libra.jpeg')
    //         break;
    //     case 'Scorpio (Oct. 23rd - Nov. 21st)':
    //         console.log(image.scr = 'resources/Scorpio.jpeg')
    //         break;
    //     case 'Sagittarius (Nov. 22nd - Dec. 21st)':
    //         console.log(image.scr = 'resources/Sagitarius.jpeg')
    //         break;
    //     default: console.log(image.scr = 'resources/Zodiac_practice_pic.jpeg')
    //         break;
    //   }
    // };

    fetch(`https://aztro.sameerkumar.website/?sign=${selectedZodiacValue}&day=today`, {
        method: 'POST'
    })

        .then(reply => reply.json())

        .then(data => addContent(data))

        .catch(err => alert('Missing data, enter all information.'))

});



