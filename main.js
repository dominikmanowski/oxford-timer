const timer = document.getElementById('timer');
const speech = document.getElementById('speech');
const adVocem = document.getElementById('ad-vocem');

const speechTime = 241000;
const adVocemTime = 31000;

const watch = new Stopwatch(timer);

function stop() {
    watch.stop();
}

speech.addEventListener('click', function() {
    watch.isOn ? stop() : watch.start(speechTime);
});

adVocem.addEventListener('click', function() {
    watch.isOn ? stop() : watch.start(adVocemTime);
});