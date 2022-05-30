import { CEP } from './CEP'

describe('Validate CEP', () => {

  test("Should be able to validate a valid CEP - A", function () {
    const cep = new CEP("68502-240")
    expect(cep.validate()).toBeTruthy()
  });

  test("Should be able to validate a valid CEP - less", function () {
    const cep = new CEP("68502")
    expect(cep.validate()).toBeFalsy()
  });

  test("Should be able to validate a invalid CEP - more", function () {
    const cep = new CEP("A9999918")
    expect(cep.validate()).toBeFalsy()
  });

  test("Should be able to validate null type", function () {
    const cepNumber: any = null
    const cep = new CEP(cepNumber)
    expect(cep.validate()).toBeFalsy()
  });
})
