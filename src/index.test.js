const { plusMinus } = require("./index")

describe("plusMinus", () => {
  it("should return the correct ratios", () => {
    expect(plusMinus([-4, 3, -9, 0, 4, 1], 6)).toEqual([
      "0.500000",
      "0.333333",
      "0.166667"
    ])
  })

  it("should return the correct ratios with 8 decimal places", () => {
    expect(plusMinus([1, 2, 3, -1, -2, -3, 0, 0], 8)).toEqual([
      "0.37500000",
      "0.37500000",
      "0.25000000"
    ])
  })
})
