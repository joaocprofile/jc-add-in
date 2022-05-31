export interface Validator {
  validate(): boolean
  removeMask(): string
  isValidLength(value: string): boolean
  isValidFormat(value: string): boolean
}