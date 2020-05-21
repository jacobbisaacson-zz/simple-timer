console.log("simple timer with reset and stop");

const timer = {
  intervalID: null, 
  timeElapsed: 0,

  start: function() {
    this.printTime()
    this.intervalID = setInterval(() => {
      this.timeElapsed++
      this.printTime()
    }, 1000)    
  }, 
  stop: function() {
    clearInterval(this.intervalID)
  },
  reset: function() {
    this.timeElapsed = 0
    timer.printTime()
  },
  printTime: function() {
    const seconds = this.timeElapsed

    let mm = Math.floor(seconds/60)
    // console.log(mm); //

    let ss = seconds - (mm * 60)
    console.log(ss);

    if(ss < 10) {
      ss = "0" + ss  // type coercion -- will convert to string
    }

    const timeElement = document.getElementById('time')
    if(mm >= 10) {
      timeElement.style.color = "red"
    }
    timeElement.innerText = `${mm}:${ss}`
    if(mm === 15) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "red";
      const stopMsg = document.createElement('h1')
      stopMsg.style.fontSize = "4em"
      stopMsg.innerText = "STOP NOW"
      document.body.appendChild(stopMsg)
      clearInterval(this.intervalID)
    }
  }
}

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  timer.start()
})

document.getElementsByTagName('button')[1].addEventListener('click', () => {
  timer.stop()
})

document.getElementsByTagName('button')[2].addEventListener('click', () => {
  timer.reset()
})



