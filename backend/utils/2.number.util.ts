function generateRandomNumber(from: number, to: number) {
  /**
   * + from = -10
   * + to = 30
   * + ret = [-10,30]
   * + math.random() = [0,0.99999]
   *
   * + math.random()*to = [0,0.99999] * 30 = [0,29.9997]
   * + math.random()*(to-from) = [0,0.999] * (30--10) = [0,0.999]*40 = [0,39.9996]
   * + math.random()*(to-from)+from = [0,39.96] + -10 = [-10,29.9996]
   * + math.round( math.random()*(to-from)+from) = [-10,30]
   */
  return Math.round(Math.random() * (to - from) + from);
}

export { generateRandomNumber };
