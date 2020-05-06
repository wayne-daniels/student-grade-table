/* eslint-disable no-undef */
var table = document.querySelector('table');
var gradeTable = new GradeTable(table);

var hdr = document.querySelector('header');
var pageHeader = new PageHeader(hdr);

var app = new App(gradeTable, pageHeader);
app.start();
