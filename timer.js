function Timer(element) {
    let time;
    let interval;
    let offset;

    function update() {
        if (this.isOn) {
            time += delta();
        }
        element.textContent = formattedTime;
    }


    function delta() {
        let now = Date.now();
        let timePassed = offset - now;
        offset = now;

        return timePassed
    }

    function formattedTime(timeInSeconds) {
        let time = new Date(timeInSeconds);
        let minutes = time.getMinutes() + ':';
        let seconds = time.getSeconds().toString();

        if (minutes === '0:') {
            minutes = ''
        }

        if (seconds.length < 2) {
            seconds = `0${seconds}`
        }

        return `${minutes}${seconds}`

    }


    this.isOn = false;

    this.start = function() {
        if (!this.isOn) {
            interval = setInterval(update, 100);
            offset = Date.now();
            this.isOn = true;
        }

    };

    this.stop = function() {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };
    this.reset = function() {
        time = timeAmount
    };
}