import { CNPJ } from './CNPJ'

describe('Validate CNPJ', () => {

  test("Should be able to validate a valid CNPJ - A", function () {
    const cnpj = new CNPJ("08.053.005/0001-94")
    expect(cnpj.validate()).toBeTruthy()
  });

  test("Should be able to validate a valid CNPJ - B", function () {
    const cnpj = new CNPJ("22.588.855/0001-18")
    expect(cnpj.validate()).toBeTruthy()
  });

  test("Should be able to validate a valid CNPJ - C", function () {
    const cnpj = new CNPJ("51.898.841/0001-07")
    expect(cnpj.validate()).toBeTruthy()
  });

  test("Should be able to validate a invalid format CNPJ", function () {
    const cnpj = new CNPJ("111.111.111.111-11")
    expect(cnpj.validate()).toBeFalsy()
  });

  test("Should be able to validate a invalid size CNPJ - more", function () {
    const cnpj = new CNPJ("123.456.789-00000000")
    expect(cnpj.validate()).toBeFalsy()
  });

  test("Should be able to validate a invalid size CNPJ - less", function () {
    const cnpj = new CNPJ("123.456")
    expect(cnpj.validate()).toBeFalsy()
  });

  test("Should be able to validate null type", function () {
    const cnpjNumber: any = null
    const cnpj = new CNPJ(cnpjNumber)
    expect(cnpj.validate()).toBeFalsy()
  });

  test("Should be able to validate undefined type", function () {
    const cnpjNumber: any = undefined
    const cnpj = new CNPJ(cnpjNumber)
    expect(cnpj.validate()).toBeFalsy()
  });

  test("Should be able to validate invalid format - B", function () {
    const cnpj = new CNPJ("000.123.456.AAA-BB")
    expect(cnpj.validate()).toBeFalsy()
  });
})
