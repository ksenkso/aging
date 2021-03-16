/**
 * @typedef {{
 *     years: number,
 *     months: number,
 *     days: number,
 *     hours: number,
 *     minutes: number,
 *     seconds: number,
 *     milliseconds: number
 * }} DateDiff
 */
function dateDiff(f, t) {
    const [from, to] = [f, t]
        .sort((a, b) => a - b)
        .map(getDateComponents)

    /**
     * @type {DateDiff}
     */
    const diff = {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
    }

    const partSizes = {
        months: 12,
        hours: 24,
        minutes: 60,
        seconds: 60,
        milliseconds: 1000
    }

    const partSize = (part) => part === 'days'
        ? daysInMonth(to.months, to.years)
        : partSizes[part]

    return Object
        .keys(diff)
        .reverse()
        .reduce((diff, part, index, parts) => {
            if (to[part] < from[part]) {
                to[part] += partSize(part)
                to[parts[index + 1]]--

                let i = index
                let nextPart = parts[++i]
                while (to[nextPart] < 0 && i < parts.length) {
                    to[nextPart] = partSize(nextPart) + to[nextPart]
                    nextPart = parts[++i]
                    to[nextPart]--
                }
            }

            diff[part] = to[part] - from[part]

            return diff
        }, diff)
}

/**
 *
 * @param {Date} date
 * @returns {DateDiff}
 */
function getDateComponents(date) {
    return {
        years: +date.getFullYear(),
        months: date.getMonth(),
        days: date.getDate(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        milliseconds: date.getMilliseconds()
    }
}

/**
 *
 * @param {number} month
 * @param {number} year
 * @return {number}
 */
function daysInMonth(month, year) {
    return +new Date(year, month, 0).getDate();
}

module.exports = dateDiff
