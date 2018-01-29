const TIMER = document.getElementById('time');
const SPEECH_BTN = document.getElementById('speech');
const AD_VOCEM = document.getElementById('ad-vocem');


let countdown = new Timer(TIMER);

SPEECH_BTN.addEventListener('click', function(){
    if (countdown.isOn) {
        countdown.stop()
    } else {
        countdown.start()
    }
});