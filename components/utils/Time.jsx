
const Time = ({ num }) => {

    if (num < 1) {
        return '0'
    };
    const qualifier = num => (num > 1 ? 's' : '')
    const numToStr = (num, unit) => num > 0 ? ` ${num}
     ${unit}${qualifier(num)}` : ''
    const oneMinute = 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const oneMonth = oneDay * 30;
    const oneYear = oneDay * 365;
    const times = {
        year: ~~(num / oneYear),
        month: ~~(num / oneMonth),
        day: ~~((num % oneYear) / oneDay),
        hour: ~~((num % oneDay) / oneHour),
        minute: ~~((num % oneHour) / oneMinute),
        second: num % oneMinute,
    };
    let str = '';
    for (let [key, value] of Object.entries(times)) {
        str += numToStr(times[key], key)
    }
    const arr = str.trim().split(' ')

    let res;

    if (times.year) {
        if (times.year > 1) {
            return `${times.year} Years`
        }
        return `${times.year} Year`

    } else if (times.month) {
        if (times.month > 1) {
            return `${times.month} Months`
        }
        return `${times.month} Month`
        
    } else if (times.day) {
        if (times.day > 1) {
            return `${times.day} days`
        }
        return `${times.day} day`
    }
    else if (times.hour) {
        if (times.hour > 1) {
            return `${times.hour} hours`
        }
        return `${times.hour} hour`
    }
    else if (times.minute) {
        if (times.minute > 1) {
            return `${times.minute} minutes`
        }
        return `${times.minute} minute`
    } else {
        return `${times.second} seconds`
    }

}


export default Time