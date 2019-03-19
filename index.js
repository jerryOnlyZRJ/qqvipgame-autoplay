const {
    exec
} = require('child_process')

const TOTAL_TIMES_FOR_ACCELERATE = 16
const ACCELERATE_PRESS_DURATION = 130
const ACCELERATE_DURATION = 5600
const DELAY_AFTER_CLICK_START_BUTTON = 1000 
let times = 2

exec('adb shell input tap 500 1780')
setTimeout(() => {
    exec(`adb shell input swipe 500 1780 501 1781 ${ACCELERATE_PRESS_DURATION}`)
    const loops = setInterval(() => {
        if (times > TOTAL_TIMES_FOR_ACCELERATE) {
            clearInterval(loops)
            exec('adb shell input tap 535 1050')
            process.exit(0)
        } else {
            // 长按加速按钮
            exec(`adb shell input swipe 500 1780 501 1781 ${ACCELERATE_PRESS_DURATION}`)
            times++
        }
    }, ACCELERATE_DURATION)
}, DELAY_AFTER_CLICK_START_BUTTON)
