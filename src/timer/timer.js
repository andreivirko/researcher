import timerRefs from "../refs/timerRefs";
import switchBtn from "../refs/switchBtn";

const timer = {
  isActive: false,
  // тут будут методы
  start() {
    console.log(this.isActive);
    console.log("start");
    if (!this.isActive) {
      this.isActive = true;
      console.log(this.isActive);
      const startTime = Date.now();
      this.timerId = setInterval(() => {
        const currentTime = Date.now();
        this.deltaTime = currentTime - startTime;
        updateClockFace(this.deltaTime);
      }, 1000);
    }
  },
  stop() {
    console.log("stop");
    clearInterval(this.timerId);
    this.isActive = false;
    this.deltaTime = 0;
    updateClockFace(this.deltaTime);
  },
};
// за классом
console.log(Date.now());
console.dir(timerRefs.days);
// Timer.start();
switchBtn.startBtn.addEventListener("click", timer.start.bind(timer));
switchBtn.stopBtn.addEventListener("click", timer.stop.bind(timer));

function updateClockFace(time) {
  let day = Math.floor(
    (time % (1000 * 60 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24),
  );
  let hour = Math.floor((time % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));
  let minute = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((time % (1000 * 60)) / 1000);
  console.log(day);
  timerRefs.days.textContent = day;
  timerRefs.hours.textContent = hour;
  timerRefs.minutes.textContent = minute;
  timerRefs.seconds.textContent = second;
}
