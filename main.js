var timer = document.getElementById('timer');
var speech = document.getElementById('speech');
var adVocem = document.getElementById('ad-vocem');

var watch = new Stopwatch(timer);

function start() {
    speech.textContent = 'Pauza';
    watch.start(241000);
}

function stop() {
    speech.textContent = 'Start';
    watch.stop();
}

speech.addEventListener('click', function() {
    watch.isOn ? stop() : start();
});

adVocem.addEventListener('click', function() {
    watch.start(31000);
});

// timer.addEventListener('textContent', function(){
//     if
// })