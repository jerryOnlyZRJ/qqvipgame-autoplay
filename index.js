const {
    exec
} = require('child_process')

const TOTAL_TIMES_FOR_ACCELERATE = 12
const ACCELERATE_DURATION = 5600
const DELAY_AFTER_CLICK_START_BUTTON = 500 
let times = 2

exec('adb shell input tap 500 1780')
setTimeout(() => {
    exec('adb shell input swipe 500 1780 501 1781 250')
    const loops = setInterval(() => {
        if (times > TOTAL_TIMES_FOR_ACCELERATE) {
            clearInterval(loops)
            process.exit(0)
        } else {
            // 长按加速按钮
            exec('adb shell input swipe 500 1780 501 1781 250')
            times++
        }
    }, ACCELERATE_DURATION)
}, DELAY_AFTER_CLICK_START_BUTTON)