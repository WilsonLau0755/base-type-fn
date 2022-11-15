declare interface Date {
  format(fmt: string): string,
  sectionDateTimeFormat(endDate: Date): string
}
interface Number {
  toDateTimeStr(): string
}
interface String {
  fixIOSDateTimeStr(): string,
  randomStr(length: number): string
}
