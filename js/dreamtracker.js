class DreamTracker {
    constructor({
        selector,
        targetDate
    }) {
        this.selector = selector
        this.targetDate = targetDate
    }

    getTimeRemaining(endtime){
        console.log(endtime)
    }

    updateTimer({ hours, mins, secs}){

    }

    startTimer(){
        const timer = this.getTimeRemaining(this.targetDate)
    }
}

const timer1 = new DreamTracker ({
    selector: '#clock',
    targetDate: new Date ('June, 25 2024 14:00:00')
})

timer1.startTimer()
