import { Validator } from "./validator"

const ufs: string[] = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'ES', 'GO',
  'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI',
  'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE',
  'SP', 'TO']

export class UF implements Validator {

  private value: string

  constructor(value: string) {
    this.value = value
  }

  validate(): boolean {
    if (!this.value) return false
    const uf = this.removeMask()
    if (!this.isValidLength(uf)) return false
    return this.isValidFormat(uf)
  }

  removeMask(): string {
    return this.value.toUpperCase()
  }

  isValidLength(value: string): boolean {
    return value.length == 2
  }

  isValidFormat(value: string): boolean {
    return ufs.includes(value) ? true : false
  }
}