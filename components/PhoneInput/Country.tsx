class Country {
  private countryDialCodes: any[];
  // private countriesData: any;
  // private countries: any;

  constructor() {
    this.countryDialCodes = [];
    // this.countriesData = null;
  }

  setCustomCountriesData() {
    // this.countriesData = json;
  }

  addCountryCode(iso2: string, dialCode: string, priority?: any) {
    if (!(dialCode in this.countryDialCodes)) {
      this.countryDialCodes[dialCode] = [];
    }

    const index = priority || 0;
    this.countryDialCodes[dialCode][index] = iso2;
  }

  getAll() {}
}

export default new Country();
