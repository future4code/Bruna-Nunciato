import { Character, validateCharacter } from "../src/validateCharacter"

describe("Testing function validateCharacter",() =>{
    test("testing if name of character is empty",() =>{
        const result = validateCharacter({
            name: "",
            life: 200,
            strength: 100,
            defense: 12
        })
        expect(result).toBe(false)
    })

    test("testing if life of character is 0",() =>{
        const result = validateCharacter({
            name: "Jorge",
            life: 0,
            strength: 100,
            defense: 12
        })
        expect(result).toBe(false)
    })

    test("testing if strength of character is 0",() =>{
        const result = validateCharacter({
            name: "Jorge",
            life: 20,
            strength: 0,
            defense: 12
        })
        expect(result).toBe(false)
    })

    test("testing if defense of character is 0",() =>{
        const result = validateCharacter({
            name: "Jorge",
            life: 20,
            strength: 120,
            defense: 0
        })
        expect(result).toBe(false)
    })

    test("testing if life of character is negative",() =>{
        const result = validateCharacter({
            name: "Jorge",
            life: -20,
            strength: 120,
            defense: 50
        })
        expect(result).toBe(false)
    })

    test("testing if values are validate",() =>{
        const result = validateCharacter({
            name: "Jorge",
            life: 200,
            strength: 120,
            defense: 50
        })
        expect(result).toBe(true)
    })
})
