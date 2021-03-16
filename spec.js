const { describe, it, expect } = require('@jest/globals')
const dateDiff = require('./index.js')
function makeDiff(diff = {}) {
    return {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        ...diff
    }
}
describe('Date diff', () => {
    it('same year, same month, same day', () => {
        const from = new Date(2021, 2, 15);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual(makeDiff({
            years: 0,
            months: 0,
            days: 0
        }))
    })

    it('same year, same month, to day > from day', () => {
        const from = new Date(2021, 2, 5);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual(makeDiff({
            years: 0,
            months: 0,
            days: 10
        }))
    })

    it('same year, to month > from month, same day', () => {
        const from = new Date(2021, 0, 15);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual(makeDiff({
            years: 0,
            months: 2,
            days: 0
        }))
    })

    it('same year, to month > from month, to day < from day', () => {
        const from = new Date(2021, 0, 15);
        const to = new Date(2021, 2, 5);
        expect(dateDiff(from, to)).toEqual(makeDiff({
            years: 0,
            months: 1,
            days: 18
        }))
    })

    it('same year, to month > from month, to day > from day', () => {
        const from = new Date(2021, 0, 5);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual(makeDiff({
            years: 0,
            months: 2,
            days: 10
        }))
    })

    it('to year > from year, same month, same day', () => {
        const from = new Date(2020, 2, 15);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual(makeDiff({
            years: 1,
            months: 0,
            days: 0
        }))
    })

    it('to year > from year, same month, to day < from day', () => {
        const from = new Date(2020, 2, 15);
        const to = new Date(2021, 2, 5);
        expect(dateDiff(from, to)).toEqual(makeDiff({
            years: 0,
            months: 11,
            days: 18
        }))
    })

    it('to year > from year, same month, to day > from day', () => {
        const from = new Date(2020, 2, 5);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual(makeDiff({
            years: 1,
            months: 0,
            days: 10
        }))
    })

    it('to year > from year, to month > from month, same day', () => {
        const from = new Date(2020, 2, 5);
        const to = new Date(2021, 4, 5);
        expect(dateDiff(from, to)).toEqual(makeDiff({
            years: 1,
            months: 2,
            days: 0
        }))
    })


    it('to year > from year, to month > from month, to day > from day', () => {
        const from = new Date(2020, 2, 5);
        const to = new Date(2021, 4, 15);
        expect(dateDiff(from, to)).toEqual(makeDiff({
            years: 1,
            months: 2,
            days: 10
        }))
    })

    it('to year > from year, to month > from month, to day < from day', () => {
        const from = new Date(2020, 2, 15);
        const to = new Date(2021, 4, 5);
        expect(dateDiff(from, to)).toEqual(makeDiff({
            years: 1,
            months: 1,
            days: 20
        }))
    })

    it('to year > from year, to month < from month, same day', () => {
        const from = new Date(2019, 4, 15);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual(makeDiff({
            years: 1,
            months: 10,
            days: 0
        }))
    })

    it('to year > from year, to month < from month, to day > from day', () => {
        const from = new Date(2019, 4, 5);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual(makeDiff({
            years: 1,
            months: 10,
            days: 10
        }))
    })

    it('to year > from year, to month < from month, to day < from day', () => {
        const from = new Date(2019, 4, 15);
        const to = new Date(2021, 2, 5);
        expect(dateDiff(from, to)).toEqual(makeDiff({
            years: 1,
            months: 9,
            days: 18
        }))
    })

    it('all same to month, to > from to days, rest - from > to', () => {
        const from = new Date(2021, 3, 22, 10, 15, 40, 350)
        const to = new Date(2021, 3, 23)
        expect(dateDiff(from, to)).toEqual(makeDiff({
            hours: 13,
            minutes: 44,
            seconds: 19,
            milliseconds: 650
        }))
    })

    it('all same to month, to > from to hours, rest - from > to', () => {
        const from = new Date(2021, 3, 22, 10, 15, 40, 350)
        const to = new Date(2021, 3, 23, 12)
        expect(dateDiff(from, to)).toEqual(makeDiff({
            days: 1,
            hours: 1,
            minutes: 44,
            seconds: 19,
            milliseconds: 650
        }))
    })

    it('all same to month, to > from to minutes, rest - from > to', () => {
        const from = new Date(2021, 3, 22, 10, 15, 40, 350)
        const to = new Date(2021, 3, 23, 12, 20)
        expect(dateDiff(from, to)).toEqual(makeDiff({
            days: 1,
            hours: 2,
            minutes: 4,
            seconds: 19,
            milliseconds: 650
        }))
    })

    it('all same to month, to > from to seconds, rest - from > to', () => {
        const from = new Date(2021, 3, 22, 10, 15, 40, 350)
        const to = new Date(2021, 3, 23, 12, 20, 50)
        expect(dateDiff(from, to)).toEqual(makeDiff({
            days: 1,
            hours: 2,
            minutes: 5,
            seconds: 9,
            milliseconds: 650
        }))
    })

    it('all same to month, to > from to milliseconds', () => {
        const from = new Date(2021, 3, 22, 10, 15, 40, 350)
        const to = new Date(2021, 3, 23, 12, 20, 50, 800)
        expect(dateDiff(from, to)).toEqual(makeDiff({
            days: 1,
            hours: 2,
            minutes: 5,
            seconds: 10,
            milliseconds: 450
        }))
    })

    describe('Special cases', () => {
        it('same year, prev month, from date > to date', () => {
            const from = new Date(2021, 2, 15);
            const to = new Date(2021, 3, 10);
            expect(dateDiff(from, to)).toEqual(makeDiff({
                years: 0,
                months: 0,
                days: 26
            }))
        })

        it('1 day of age', () => {
            const from = new Date(2021, 2, 15);
            const to = new Date(2021, 2, 16);
            expect(dateDiff(from, to)).toEqual(makeDiff({
                years: 0,
                months: 0,
                days: 1
            }))
        })

        it('from year < to year, same month, prev day', () => {
            const from = new Date(1997, 3, 15);
            const to = new Date(2021, 3, 14);
            expect(dateDiff(from, to)).toEqual(makeDiff({
                years: 23,
                months: 11,
                days: 30
            }))
        })
    })
})
