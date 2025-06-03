const button = document.querySelector('.button')
const showTime = document.querySelector('#time')
button.addEventListener('click', function (e) {

    setInterval(function () {
        const time = new Date().toLocaleTimeString()
        showTime.innerHTML = time;
    }, 1000)

})