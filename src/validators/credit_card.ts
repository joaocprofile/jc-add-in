import { Validator } from "./validator"

export class CreditCard implements Validator {
  private documentNumber: string

  constructor(documentNumber: string) {
    this.documentNumber = documentNumber
  }

  validate(): boolean {
    return true
  }

  removeMask(): string {
    return this.documentNumber.replace(/[\.\/\-]*/g, "")
  }

  isValidLength(value: string): boolean {
    return false
  }

  isValidFormat(value: string): boolean {
    return false
  }

  calculateDigit(value: string, factor: number): number {
    return 0
  }

  extractActualDigit(value: string): string {
    return ""
  }

}