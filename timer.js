

function Stopwatch(elem) {
    let time;
    let offset;
    let interval;

    function update() {
        if (this.isOn) {
            time += delta();
        }

        console.log(time);

        if (time < 110) {
            this.stop()
        }

        if (time < 31000) {
            document.getElementById('timer').classList.add("warning")
        } else {
            document.getElementById('timer').classList.remove("warning")
        }

        elem.textContent = timeFormatter(time);
    }

    function delta() {
        let now = Date.now();
        let timePassed = offset - now;

        offset = now;

        return timePassed;
    }

    function timeFormatter(time) {
        time = new Date(time);

        let minutes = time.getMinutes() + ":";
        let seconds = time.getSeconds().toString();

        if (minutes < '1') {
            minutes = '';
        }

        if (seconds.length < 2) {
            seconds = `0${seconds}`;
        }


        return `${minutes}${seconds}`;
    }

    this.start = function(timeAmount) {
        time = timeAmount;
        interval = setInterval(update.bind(this), 100);
        offset = Date.now();
        this.isOn = true;
    };

    this.stop = function() {
        clearInterval(interval);
        interval = null;
        this.isOn = false;
    };


    this.isOn = false;
}
