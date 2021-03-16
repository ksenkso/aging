const { describe, it, expect } = require('@jest/globals')
const dateDiff = require('./index.js')

describe('Date diff', () => {
    it('same year, same month, same day', () => {
        const from = new Date(2021, 2, 15);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual({
            years: 0,
            months: 0,
            days: 0
        })
    })

    it('same year, same month, to day > from day', () => {
        const from = new Date(2021, 2, 5);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual({
            years: 0,
            months: 0,
            days: 10
        })
    })

    it('same year, to month > from month, same day', () => {
        const from = new Date(2021, 0, 15);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual({
            years: 0,
            months: 2,
            days: 0
        })
    })

    it('same year, to month > from month, to day < from day', () => {
        const from = new Date(2021, 0, 15);
        const to = new Date(2021, 2, 5);
        expect(dateDiff(from, to)).toEqual({
            years: 0,
            months: 1,
            days: 18
        })
    })

    it('same year, to month > from month, to day > from day', () => {
        const from = new Date(2021, 0, 5);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual({
            years: 0,
            months: 2,
            days: 10
        })
    })

    it('to year > from year, same month, same day', () => {
        const from = new Date(2020, 2, 15);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual({
            years: 1,
            months: 0,
            days: 0
        })
    })

    it('to year > from year, same month, to day < from day', () => {
        const from = new Date(2020, 2, 15);
        const to = new Date(2021, 2, 5);
        expect(dateDiff(from, to)).toEqual({
            years: 0,
            months: 11,
            days: 18
        })
    })

    it('to year > from year, same month, to day > from day', () => {
        const from = new Date(2020, 2, 5);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual({
            years: 1,
            months: 0,
            days: 10
        })
    })

    it('to year > from year, to month > from month, same day', () => {
        const from = new Date(2020, 2, 5);
        const to = new Date(2021, 4, 5);
        expect(dateDiff(from, to)).toEqual({
            years: 1,
            months: 2,
            days: 0
        })
    })


    it('to year > from year, to month > from month, to day > from day', () => {
        const from = new Date(2020, 2, 5);
        const to = new Date(2021, 4, 15);
        expect(dateDiff(from, to)).toEqual({
            years: 1,
            months: 2,
            days: 10
        })
    })

    it('to year > from year, to month > from month, to day < from day', () => {
        const from = new Date(2020, 2, 15);
        const to = new Date(2021, 4, 5);
        expect(dateDiff(from, to)).toEqual({
            years: 1,
            months: 1,
            days: 20
        })
    })

    it('to year > from year, to month < from month, same day', () => {
        const from = new Date(2019, 4, 15);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual({
            years: 1,
            months: 10,
            days: 0
        })
    })

    it('to year > from year, to month < from month, to day > from day', () => {
        const from = new Date(2019, 4, 5);
        const to = new Date(2021, 2, 15);
        expect(dateDiff(from, to)).toEqual({
            years: 1,
            months: 10,
            days: 10
        })
    })

    it('to year > from year, to month < from month, to day < from day', () => {
        const from = new Date(2019, 4, 15);
        const to = new Date(2021, 2, 5);
        expect(dateDiff(from, to)).toEqual({
            years: 1,
            months: 9,
            days: 18
        })
    })


})
