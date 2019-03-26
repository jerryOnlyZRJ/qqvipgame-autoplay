const {
    exec
} = require('child_process')

// 一局游戏需要加速的次数
const TOTAL_TIMES_FOR_ACCELERATE = 15
// 长按加速按钮的时间
const ACCELERATE_PRESS_DURATION = 250
// 两次按下加速按钮的时间间隔
const ACCELERATE_DURATION = 5800
// 按下开始按钮后的延迟
const DELAY_AFTER_CLICK_START_BUTTON = 1000
// 开始/加速按钮位置
const START_BTN_POSITION = [545, 2060]
// 继续按钮位置
const NEXT_BTN_POSITION = [545, 1340]
let times = 2

exec(`adb shell input tap ${START_BTN_POSITION[0]} ${START_BTN_POSITION[1]}`)
setTimeout(() => {
    exec(`adb shell input swipe ${START_BTN_POSITION[0]} ${START_BTN_POSITION[1]} ${START_BTN_POSITION[0] + 1} ${START_BTN_POSITION[1] + 1} ${ACCELERATE_PRESS_DURATION}`)
    const loops = setInterval(() => {
        if (times > TOTAL_TIMES_FOR_ACCELERATE) {
            clearInterval(loops)
            exec(`adb shell input tap ${NEXT_BTN_POSITION[0]} ${NEXT_BTN_POSITION[1]}`)
            process.exit(0)
        } else {
            // 长按加速按钮
            exec(`adb shell input swipe ${START_BTN_POSITION[0]} ${START_BTN_POSITION[1]} ${START_BTN_POSITION[0] + 1} ${ACCELERATE_PRESS_DURATION}`)
            times++
        }
    }, ACCELERATE_DURATION)
}, DELAY_AFTER_CLICK_START_BUTTON)
