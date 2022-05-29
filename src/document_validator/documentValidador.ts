export interface DocumentValidator {
  validate(): boolean
  getDocument(): string
  removeMask(): string
  isValidLength(value: string): boolean
  isValidFormat(value: string): boolean
  calculateDigit(value: string, factor: number): number
  extractActualDigit(value: string): string
}