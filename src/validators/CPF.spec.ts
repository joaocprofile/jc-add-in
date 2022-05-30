import { CPF } from './CPF'

describe('Validate document', () => {

  test("Should be able to validate a valid CPF - A", function () {
    const cpf = new CPF("935.411.347-80")
    expect(cpf.validate()).toBeTruthy()
  });

  test("Should be able to validate a valid CPF - B", function () {
    const cpf = new CPF("357.188.378-05")
    expect(cpf.validate()).toBeTruthy()
  });

  test("Should be able to validate a valid CPF - C", function () {
    const cpf = new CPF("987.654.321-00")
    expect(cpf.validate()).toBeTruthy()
  });

  test("Should be able to validate a invalid format CPF", function () {
    const cpf = new CPF("111.111.111-11")
    expect(cpf.validate()).toBeFalsy()
  });

  test("Should be able to validate a invalid size CPF - more", function () {
    const cpf = new CPF("123.456.789-00000000")
    expect(cpf.validate()).toBeFalsy()
  });

  test("Should be able to validate a invalid size CPF - less", function () {
    const cpf = new CPF("123.456")
    expect(cpf.validate()).toBeFalsy()
  });

  test("Should be able to validate null type", function () {
    const cpfNumber: any = null
    const cpf = new CPF(cpfNumber)
    expect(cpf.validate()).toBeFalsy()
  });

  test("Should be able to validate undefined type", function () {
    const cpfNumber: any = undefined
    const cpf = new CPF(cpfNumber)
    expect(cpf.validate()).toBeFalsy()
  });

  test("Should be able to validate invalid format - B", function () {
    const cpf = new CPF("123.456.AAA-BB")
    expect(cpf.validate()).toBeFalsy()
  });
})
