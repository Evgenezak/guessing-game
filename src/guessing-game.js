class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min + 1;
      this.max = max - 1;
    }

    guess() {
      this.number = Math.ceil((this.min + this.max) / 2)
      return this.number
    }

    lower() {
      this.max = this.number - 1
    }

    greater() {
      this.min = this.number + 1
    }
}

module.exports = GuessingGame;
