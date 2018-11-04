const strPercentToNumber = value => parseInt(value.substring(0, value.length - 1))

const strToLocation = value => {
  const chunks = value.split(',').map(chunk => chunk.toLowerCase().trim())
  return {
    country: chunks[0],
    city: chunks[1]
  }
}

export default {
    strPercentToNumber,
    strToLocation
}
