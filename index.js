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
    const from = getDateComponents(f);
    const to = getDateComponents(t);

    /**
     * @type {DateDiff}
     */
    const diff = {
        years: 0,
        months: 0,
        days: 0
    }

    if (to.days < from.days) {
        to.days += daysInMonth(to.months, to.years)
        to.months--
    }
    diff.days = to.days - from.days

    if (to.months < from.months) {
        to.months += 12
        to.years--
    }
    diff.months = to.months - from.months

    diff.years = to.years - from.years

    return diff
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
    }
}

module.exports = dateDiff
