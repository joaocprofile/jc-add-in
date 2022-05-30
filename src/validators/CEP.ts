import { Validator } from "./validator"

export class CEP implements Validator {

  private cepNumber: string

  constructor(cepNumber: string) {
    this.cepNumber = cepNumber
  }

  validate(): boolean {
    if (!this.cepNumber) return false
    const cepNumber = this.removeMask()
    if (!this.isValidLength(cepNumber)) return false
    return this.isValidFormat(cepNumber)
  }

  removeMask(): string {
    return this.cepNumber.replace(/\.|\-/g, '')
  }

  isValidLength(value: string): boolean {
    return value.length == 8
  }

  isValidFormat(value: string): boolean {
    const cepFormat = value.substring(0, 5) + "-" + value.substring(5)
    return (/\d{5}\-\d{3}/).test(cepFormat) ? true : false
  }

  calculateDigit(value: string, factor: number): number {
    return 0
  }
  extractActualDigit(value: string): string {
    return ""
  }
}