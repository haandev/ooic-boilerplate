export type ClassName = string | Array<ClassName> | boolean | undefined | null

const classnames = (...classNames: Array<ClassName | ClassName[]>): string => {
  return classNames
    .filter((className) => className)
    .map((className) => {
      if (Array.isArray(className)) {
        return classnames(...className)
      }
      return className
    })
    .join(' ')
}
export default classnames
