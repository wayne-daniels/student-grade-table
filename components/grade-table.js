/* eslint-disable no-unused-vars */
class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    var tBody = this.tableElement.querySelector('tbody');

    var noGrd = document.querySelector('p');
    if (grades != 0) {
      noGrd.classList = ('d-none');
    } else {
      noGrd.classList = ('d-block');
    }

    for (var i = 0; i < grades.length; i++) {
      var tRow = this.renderGradeRow(grades[i], this.deleteGrade);
      tBody.appendChild(tRow);
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var tRow = document.createElement('tr');
    var tDataName = document.createElement('td');
    var tDataCourse = document.createElement('td');
    var tDataGrade = document.createElement('td');

    tDataName.textContent = data.name;
    tDataCourse.textContent = data.course;
    tDataGrade.textContent = data.grade;

    var delButt = document.createElement('button');
    delButt.textContent = "DELETE";
    delButt.classList.add('btn-danger', 'align-middle');
    delButt.getAttribute('type', 'submit');
    delButt.addEventListener('click', function () {
      deleteGrade(data.id);
    })

    tRow.appendChild(tDataName);
    tRow.appendChild(tDataCourse);
    tRow.appendChild(tDataGrade);
    tRow.appendChild(delButt);
    return tRow;
  }
}
