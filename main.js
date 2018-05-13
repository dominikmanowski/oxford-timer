const timer = document.getElementById('timer');
const speech = document.getElementById('speech');
const adVocem = document.getElementById('ad-vocem');


const watch = new Stopwatch(timer);

function stop() {
    // speech.textContent = 'Start';
    watch.stop();
}

speech.addEventListener('click', function() {
    watch.isOn ? stop() : watch.start(241000);
});

adVocem.addEventListener('click', function() {
    watch.isOn ? stop() : watch.start(31000);
});