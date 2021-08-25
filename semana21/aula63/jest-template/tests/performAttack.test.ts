import { validateCharacterFailure, validateHarry, validateVoldemort } from "../src/mocks/validatorCharacter";
import { performAttack } from "../src/performAttack";


describe("test attack CharactersMocks ", () => {

    test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    })
    const attacker = validateHarry
    const defender = validateVoldemort
    
    performAttack(attacker, defender , validatorMock as any);

    expect(defender.life).toEqual(300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker = validateCharacterFailure
    const defender = validateHarry

    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
})
