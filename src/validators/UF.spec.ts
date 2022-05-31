import { UF } from './UF'

describe('Validate UF', () => {

  test("Should be able to validate a valid UF - A", function () {
    const uf = new UF("SP")
    expect(uf.validate()).toBeTruthy()
  });

  test("Should be able to validate a invalid UF", function () {
    const uf = new UF("PP")
    expect(uf.validate()).toBeFalsy()
  });

  test("Should be able to validate a valid UF - less", function () {
    const uf = new UF("A")
    expect(uf.validate()).toBeFalsy()
  });

  test("Should be able to validate a valid UF - more", function () {
    const uf = new UF("PAA")
    expect(uf.validate()).toBeFalsy()
  });

  test("Should be able to validate null type", function () {
    const ufSigle: any = null
    const uf = new UF(ufSigle)
    expect(uf.validate()).toBeFalsy()
  });
})
