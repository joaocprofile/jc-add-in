import { Validator } from "./validator"

export class CPF implements Validator {
  private documentNumber: string

  constructor(documentNumber: string) {
    this.documentNumber = documentNumber
  }

  validate(): boolean {
    if (!this.documentNumber) return false
    const cpfNumber = this.removeMask()
    if (!this.isValidLength(cpfNumber)) return false
    if (this.isValidFormat(cpfNumber)) return false
    const digit1 = this.calculateDigit(cpfNumber, 10)
    const digit2 = this.calculateDigit(cpfNumber, 11)
    const actualDigit = this.extractActualDigit(cpfNumber)
    const calculatedDigit = `${digit1}${digit2}`
    return actualDigit === calculatedDigit
  }

  removeMask(): string {
    return this.documentNumber.replace(/[\.\/\-]*/g, "")
  }

  isValidLength(value: string): boolean {
    return value.length === 11
  }

  isValidFormat(value: string): boolean {
    const cpf = value
    const [firstDigit] = cpf
    return [...cpf].every(digit => digit === firstDigit)
  }

  calculateDigit(value: string, factor: number): number {
    const cpf = value
    let total = 0
    for (const digit of cpf) {
      if (factor > 1) {
        total += parseInt(digit) * factor--
      }
    }
    const rest = total % 11
    return (rest < 2) ? 0 : 11 - rest
  }

  extractActualDigit(value: string): string {
    return value.slice(9)
  }
}