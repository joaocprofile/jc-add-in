export interface Validator {
  validate(): boolean
  removeMask(): string
  isValidLength(value: string): boolean
  isValidFormat(value: string): boolean
  calculateDigit(value: string, factor: number): number
  extractActualDigit(value: string): string
}