const validateAgainstArr = (value, validators) => validators.reduce(
  (accumulator, current) => accumulator && current(value),
  true
)


const validation = {
  validateAgainstArr
}

export default validation