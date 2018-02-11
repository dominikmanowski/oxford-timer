var timer = document.getElementById('timer');
var speech = document.getElementById('speech');
var adVocem = document.getElementById('ad-vocem');

var watch = new Stopwatch(timer);

/*function start() {
    speech.textContent = 'Pauza';
    watch.start();
}*/

function stop() {
    speech.textContent = 'Start';
    watch.stop();
}

speech.addEventListener('click', function() {
    watch.isOn ? stop() : watch.start(241000);
});

adVocem.addEventListener('click', function() {
    watch.isOn ? stop() : watch.start(31000);
});