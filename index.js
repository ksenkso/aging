function daysInMonth(month, year) {
    return +new Date(year, month, 0).getDate();
}

/**
 * This is not a complete list, check tests
 *
 * same year, same month, same day                                  => 0, 0, 0
 * same year, same month, to day > from day                         => 0, 0, 0
 * same year, same month, to day < from day                         => 0, 0, from day - to day
 * same year, to month > from month, same day                       => 0, to month - from month, 0
 * same year, to month > from month, to day < from day              => 0, 0, dim(to month - 1) - from day + to day
 * same year, to month > from month, to day > from day              => 0, from month - to month, to day - from day
 * to year > from year, same month, same day                        => to year - from year, 0, 0
 * to year > from year, same month, to day < from day               => to year - from year - 1, 11, dim(to month - 1) - from day + to day
 * to year > from year, same month, to day > from day               => to year - from year, 0, to day - from day
 * to year > from year, to month > from month, same day             => to year - from year, to month - from month, 0
 * to year > from year, to month > from month, to day > from day    => to year - from year, to month - from month, to day - from day
 * to year > from year, to month > from month, to day < from day    => to year - from year, to month - from month - 1,
 *
 * @param {Date} f
 * @param {Date} t
 * @returns {DateDiff}
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

module.exports = dateDiff
