/* eslint-disable no-unused-vars */
class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    var tBody = $(this.tableElement).find('tbody');
    $(tBody).empty();

    grades.forEach(student => {
      tBody.append(this.renderGradeRow(student, this.deleteGrade));
    })

    if (grades) {
      return;
    } else {
      $(this.tableElement).find('p').addClass('d-block');
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {

    const delButton = $('<button>DELETE</button>')
      .addClass('btn-sm btn-danger')
      .click(() => deleteGrade(data.id));

    const tRow = $('<tr>')
      .append($('<td>').append(data.name))
      .append($('<td>').append(data.course))
      .append($('<td>').append(data.grade))
      .append($('<td>').append(delButton));

    return tRow;
  }
}
