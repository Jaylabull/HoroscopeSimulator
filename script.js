var button = document.getElementById('submit-btn');
// var usersName = document.getElementById('name-input').value

const form = document.getElementById('form');

button.addEventListener('click', function (event) {
    var selectZodiac = document.querySelector('#zodiac');
    var selectedZodiacValue = selectZodiac.options[selectZodiac.selectedIndex].value;
    const container = document.getElementById('horoscope-card');
    var usersName = document.getElementById('name-input').value

    event.preventDefault();

    while (container.firstChild) {

        container.removeChild(container.firstChild)
    }


    function addContent(data) {


        // console.log(data);

        var horoscopediv = document.createElement('div')

        var sign = document.createElement('h1')
        sign.innerHTML = selectedZodiacValue.toUpperCase()
        horoscopediv.appendChild(sign)

        var signarg = selectedZodiacValue

        // alert(selectedZodiacValue);
        var name = document.createElement('h3')
        name.innerHTML = `${usersName}'s horoscope for today!`
        horoscopediv.appendChild(name)

        var image = document.createElement('img')
        image.src = 'resources/Zodiac_practice_pic.jpeg'
        horoscopediv.appendChild(image)

        if (signarg === 'Capricorn') {
            image.src = 'resources/Capricorn.jpeg'
            container.style.backgroundColor = 'rgba(108, 253, 51, 0.200)'
            container.style.border = '1px solid green'
            document.body.style.backgroundImage = "url('resources/galax.gif')"

        } else if (signarg === 'Aquarius') {
            image.src = 'resources/Aquarius.jpeg'
            container.style.backgroundColor = 'rgba(255, 255, 255, 0.616)'
            container.style.border = '1px solid white'
            document.body.style.backgroundImage = "url('resources/galax.gif')"

        } else if (signarg === 'Pisces') {
            image.src = 'resources/Pisces.jpeg'
            container.style.backgroundColor = 'rgba(59, 112, 226, 0.550)'
            container.style.border = '1px solid babyblue'
            document.body.style.backgroundImage = "url('resources/galax.gif')"

        } else if (signarg === 'Aries') {
            image.src = 'resources/Aries.jpeg'
            container.style.backgroundColor = 'rgba(252, 193, 31, 0.450)'
            container.style.border = '1px solid orange'
            document.body.style.backgroundImage = "url('resources/galax.gif')"

        } else if (signarg === 'Taurus') {
            image.src = 'resources/Taurus.jpeg'
            container.style.backgroundColor = 'rgba(108, 253, 51, 0.200)'
            container.style.border = '1px solid green'
            document.body.style.backgroundImage = "url('resources/galax.gif')"

        } else if (signarg === 'Gemini') {
            image.src = 'resources/Gemini.jpeg'
            container.style.backgroundColor = 'rgba(255, 255, 255, 0.616)'
            container.style.border = '1px solid white'
            document.body.style.backgroundImage = "url('resources/galax.gif')"

        } else if (signarg === 'Cancer') {
            image.src = 'resources/Cancer.jpeg'
            container.style.backgroundColor = 'rgba(59, 112, 226, 0.550)'
            container.style.border = '1px solid skyblue'
            document.body.style.backgroundImage = "url('resources/galax.gif')"

        } else if (signarg === 'Leo') {
            image.src = 'resources/Leo.jpeg'
            container.style.backgroundColor = 'rgba(252, 193, 31, 0.450)'
            container.style.border = '1px solid orange'
            document.body.style.backgroundImage = "url('resources/galax.gif')"

        } else if (signarg === 'Virgo') {
            image.src = 'resources/Virgo.jpeg'
            container.style.backgroundColor = 'rgba(108, 253, 51, 0.200)'
            container.style.border = '1px solid green'
            document.body.style.backgroundImage = "url('resources/galax.gif')"

        } else if (signarg === 'Libra') {
            image.src = 'resources/Libra.jpeg'
            container.style.backgroundColor = 'rgba(255, 255, 255, 0.616)'
            container.style.border = '1px solid white'
            document.body.style.backgroundImage = "url('resources/galax.gif')"

        } else if (signarg === 'Scorpio') {
            image.src = 'resources/Scorpio.jpeg'
            container.style.backgroundColor = 'rgba(59, 112, 226, 0.550)'
            container.style.border = '1px solid skyblue'
            document.body.style.backgroundImage = "url('resources/galax.gif')"

        } else if (signarg === 'Sagittarius') {
            image.src = 'resources/Sagittarius.jpeg'
            container.style.backgroundColor = 'rgba(252, 193, 31, 0.450)'
            container.style.border = '1px solid orange'
            document.body.style.backgroundImage = "url('resources/galax.gif')"

        } else {
            image.src = 'resources/Zodiac_practice_pic.jpeg'
        }

        // var signPic = function (img) {

        //     image.src = img;
        //     horoscopediv.appendChild(pic);

        //     var checkSign = function (signarg) {
        //         switch (signarg) {
        //             case 'Capricorn':
        //                 signPic('resources/Capricorn.jpeg')
        //                 break;
        //             case 'Aquarius':
        //                 signPic('resources/Aquarius.jpeg')
        //                 break;
        //             case 'Pisces':
        //                 signPic('resources/Pisces.jpeg')
        //                 break;
        //             case 'Aries':
        //                 signPic('resources/Aries.jpeg')
        //                 break;
        //             case 'Taurus':
        //                 signPic('resources/Taurus.jpeg')
        //                 break;
        //             case 'Gemini':
        //                 signPic('resources/Gemini.jpeg')
        //                 break;
        //             case 'Cancer':
        //                 signPic('resources/Cancer.jpeg')
        //                 break;
        //             case 'Leo':
        //                 signPic('resources/Leo.jpeg')
        //                 break;
        //             case 'Virgo':
        //                 signPic('resources/Virgo.jpeg')
        //                 break;
        //             case 'Libra':
        //                 signPic('resources/Libra.jpeg')
        //                 break;
        //             case 'Scorpio':
        //                 signPic('resources/Scorpio.jpeg')
        //                 break;
        //             case 'Sagittarius':
        //                 signPic('resources/Sagitarius.jpeg')
        //                 break;
        //             default: signPic('resources/Zodiac_practice_pic.jpeg')
        //                 break;
        //         }
        //     };
        //     checkSign(signarg);
        // };


        // var sign = document.createElement('h2')
        // sign.innerHTML = selectedZodiacValue
        // horoscopediv.appendChild(sign)

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


    fetch(`https://aztro.sameerkumar.website/?sign=${selectedZodiacValue}&day=today`, {
        method: 'POST'
    })

        .then(reply => reply.json())

        .then(data => addContent(data))

        .catch(err => alert('Missing data, enter all information.'))

});


