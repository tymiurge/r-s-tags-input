/**
 * composes styles objects int a single one
 * @param {array} styles 
 */
const composeStyles = (...styles) => styles.reduce(
  (accumulator, current) => Object.assign(accumulator, current),
  {}
)

const composeStylesByCondition = (condition, ...styles) => {
  if (!condition) {
      return styles.length > 0 ? styles[0] : {}
  }
  if ( styles.length === 0) {
      return {}
  }
  return composeStyles(...styles)
}

export default {
  composeStyles,
  composeStylesByCondition
}