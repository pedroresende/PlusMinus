const plusMinus = (arr, decimalPlaces) => {
  const sizeOfArray = arr.length
  const positives = arr.filter((number) => number > 0)
  const negatives = arr.filter((number) => number < 0)
  const zeros = arr.filter((number) => number === 0)

  return [
    Number(positives.length / sizeOfArray).toFixed(decimalPlaces),
    Number(negatives.length / sizeOfArray).toFixed(decimalPlaces),
    Number(zeros.length / sizeOfArray).toFixed(decimalPlaces)
  ]
}

module.exports = { plusMinus }
