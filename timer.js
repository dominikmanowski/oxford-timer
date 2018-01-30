function Stopwatch(elem) {
    var time;
    var offset;
    var interval;

    function update() {
        if (this.isOn) {
            time += delta();
        }

        elem.textContent = timeFormatter(time);
    }

    function delta() {
        var now = Date.now();
        var timePassed = offset - now;

        offset = now;

        return timePassed;
    }

    function timeFormatter(time) {
        time = new Date(time);

        var minutes = time.getMinutes();
        var seconds = time.getSeconds().toString();

        if (minutes === '0') {
            minutes = '';
        }

        if (seconds.length < 2) {
            seconds = `0${seconds}`;
        }


        return `${minutes} : ${seconds}`;
    }

    this.start = function(timeAmount) {
        time = timeAmount;
        interval = setInterval(update.bind(this), 10);
        offset = Date.now();
        this.isOn = true;
    };

    this.stop = function() {
        clearInterval(interval);
        interval = null;
        this.isOn = false;
    };

    this.reset = function() {
        time = 0;
        update();
    };

    this.isOn = false;
}
