import { describe, expect, it } from 'vitest'

import { SerieCalculadora } from '../components/FunctionComponent/functionSecuence'

describe("Calculadora serie n", () => {
    it("Should return 3 if n=2", () => {
        expect(SerieCalculadora.calcularTermino(2)).toBe(3)
    })
    it("Should return 11 if n=3", () => {
        expect(SerieCalculadora.calcularTermino(3)).toBe(11)
    })
    it("Should return 22 if n=4", () => {
        expect(SerieCalculadora.calcularTermino(4)).toBe(22)
    })
    it("Should return 39 if n=5", () => {
        expect(SerieCalculadora.calcularTermino(5)).toBe(39)
    })
    it("Should return 59 if n=6", () => {
        expect(SerieCalculadora.calcularTermino(6)).toBe(59)
    })
    it("Should return 92 if n=7", () => {
        expect(SerieCalculadora.calcularTermino(7)).toBe(92)
    })
    it("Should return 133 if n=8", () => {
        expect(SerieCalculadora.calcularTermino(8)).toBe(133)
    })
    it("Should return 195 if n=9", () => {
        expect(SerieCalculadora.calcularTermino(9)).toBe(195)
    })
    it("Should return 278 if n=10", () => {
        expect(SerieCalculadora.calcularTermino(10)).toBe(278)
    })
    it("Should return 395 if n=11", () => {
        expect(SerieCalculadora.calcularTermino(11)).toBe(395)
    })
})


