/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var gradeTotal = 0;
    for (var i = 0; i < grades.length; i++) {
      gradeTotal += grades[i].grade;
    }
    var avGrade = gradeTotal / grades.length;
    this.pageHeader.updateAverage(avGrade);
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
  createGrade(name, course, grade) {
    $.ajax(
      {
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      dataType: "json",
      headers: {
        "X-Access-Token": "ikgaB9CQ"
      },
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
        success: student => this.handleCreateGradeSuccess(student),
        error: error => this.handleCreateGradeError(error)
      }
    )
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  deleteGrade(id) {
    $.ajax({
      type: "DELETE",
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      dataType: "json",
      headers: {
        "X-Access-Token": "ikgaB9CQ"
      },
      success: data => this.handleDeleteGradeSuccess(data),
      error: error => this.handleDeleteGradeError(error)
    })
  }
  handleDeleteGradeError(error) {
    console.error(error);
  }
  handleDeleteGradeSuccess() {
    this.getGrades();
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
}
