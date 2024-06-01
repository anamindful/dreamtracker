class DreamTracker {
    constructor({ selector, targetDate }) {
        this.selector = document.querySelector(selector);
        this.targetDate = targetDate;
        this.timerInterval = null;
    }

    getTimeRemaining(endtime) {
        const now = new Date();
        const timeRemaining = Date.parse(endtime) - Date.parse(now);
        const seconds = Math.floor((timeRemaining / 1000) % 60);
        const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        return { total: timeRemaining, hours, minutes, seconds };
    }

    updateTimer({ hours, minutes, seconds }) {
        this.selector.innerHTML = `
            ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}
        `;
    }

    startTimer() {
        const endtime = new Date(Date.parse(new Date()) + 25 * 60 * 1000); // 25 minutes from now
        const updateClock = () => {
            const time = this.getTimeRemaining(endtime);
            this.updateTimer(time);
            if (time.total <= 0) {
                clearInterval(this.timerInterval);
                alert("Time is up!");
            }
        };
        this.timerInterval = setInterval(updateClock, 1000);
        updateClock(); // Initial call to display timer immediately
    }
}

document.getElementById('startButton').addEventListener('click', () => {
    const timer1 = new DreamTracker({
        selector: '#clock',
        targetDate: new Date(Date.parse(new Date()) + 25 * 60 * 1000)
    });
    timer1.startTimer();
});
