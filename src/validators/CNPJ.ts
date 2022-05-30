import { Validator } from "./validator"

export class CNPJ implements Validator {

  private documentNumber: string

  constructor(documentNumber: string) {
    this.documentNumber = documentNumber
  }

  validate(): boolean {
    if (!this.documentNumber) return false
    const cnpjNumber = this.removeMask()
    if (!this.isValidLength(cnpjNumber)) return false
    if (this.isValidFormat(cnpjNumber)) return false
    const digit1 = this.calculateDigit(cnpjNumber, 12)
    const digit2 = this.calculateDigit(cnpjNumber, 13)
    const actualDigit = this.extractActualDigit(cnpjNumber)
    const calculatedDigit = `${digit1}${digit2}`
    return actualDigit === calculatedDigit
  }

  removeMask(): string {
    return this.documentNumber.replace(/[\.\/\-]*/g, "")
  }

  isValidLength(value: string): boolean {
    return value.length === 14
  }

  isValidFormat(value: string): boolean {
    const cnpj = value
    const [firstDigit] = cnpj
    return [...cnpj].every(digit => digit === firstDigit)
  }

  calculateDigit(value: string, factor: number): number {
    const cnpj = value
    let numbers = cnpj.slice(0, factor)
    let total = 0
    let pos = factor - 7
    for (let i = 0; i < factor; i++) {
      total += parseInt(numbers[i]) * pos--
      if (pos < 2) {
        pos = 9
      }
    }
    let rest = total % 11
    return (rest < 2 ? 0 : 11 - rest)
  }

  extractActualDigit(value: string): string {
    return value.slice(12)
  }
}