class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    var grAv = document.querySelector("span");
    grAv.textContent = newAverage;
  }
}
