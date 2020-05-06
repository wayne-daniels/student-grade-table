// eslint-disable-next-line no-unused-vars
class App {
  constructor(gradeTable) {
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError + this.handleGetGradesError.bind(this);
    this.gradeTable = gradeTable;
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
  }
  getGrades() {
    $.ajax(
      {
        url: "https://sgt.lfzprototypes.com/api/grades",
        type: "GET",
        dataType: "json",
        headers: {
          "X-Access-Token": "ikgaB9CQ"
        },
        success: grades => this.handleGetGradesSuccess(grades),
        error: error => this.handleGetGradesError(error)
      }
    );
  }
  start() {
    this.getGrades();
  }
}
