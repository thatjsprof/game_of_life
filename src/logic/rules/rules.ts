class BusinessRules {
  protected count: number;

  constructor(count: number) {
    this.count = count;
  }

  get caseOne() {
    return this.count <= 1;
  }

  get caseTwo() {
    return this.count >= 4;
  }

  get caseThree() {
    return this.count === 2 || this.count === 3;
  }

  get caseFour() {
    return this.count === 3;
  }
}

export default BusinessRules;
