/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var table = document.querySelector('table');
var gradeTable = new GradeTable(table);

var hdr = document.querySelector('header');
var pageHeader = new PageHeader(hdr);

var gForm = document.querySelector('form');
var gradeForm = new GradeForm(gForm);

var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
