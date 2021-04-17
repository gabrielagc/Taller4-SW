import { dataCourses } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';
var studentTbody = document.getElementById('student');
var coursesTbody = document.getElementById('courses');
var btnfilterByName = document.getElementById("button-filterByName");
var btnfilterByCredits = document.getElementById("button-filterByCredits");
var inputSearchBox = document.getElementById("search-box");
var inputSearchBox2 = document.getElementById("search-box2");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnfilterByCredits.onclick = function () { return applyFilterByCredits(); };
renderStudentInTable(dataStudent);
renderCoursesInTable(dataCourses);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function renderStudentInTable(s) {
    console.log('Desplegando estudiante');
    s.forEach(function (student) {
        var trElement = document.createElement("tr");
        var codigo = document.createElement("td");
        var cellText = document.createTextNode("Codigo");
        codigo.appendChild(cellText);
        trElement.appendChild(codigo);
        var codigo1 = document.createElement("td");
        var cellText1 = document.createTextNode("" + student.codigo);
        codigo1.appendChild(cellText1);
        trElement.appendChild(codigo1);
        studentTbody.appendChild(trElement);
        var trElement1 = document.createElement("tr");
        var cedula = document.createElement("td");
        var cellText = document.createTextNode("Cedula");
        cedula.appendChild(cellText);
        trElement1.appendChild(cedula);
        var cedula1 = document.createElement("td");
        var cellText1 = document.createTextNode("" + student.cedula);
        cedula1.appendChild(cellText1);
        trElement1.appendChild(cedula1);
        studentTbody.appendChild(trElement1);
        var trElement2 = document.createElement("tr");
        var edad = document.createElement("td");
        var cellText = document.createTextNode("Edad");
        edad.appendChild(cellText);
        trElement2.appendChild(edad);
        var edad1 = document.createElement("td");
        var cellText1 = document.createTextNode("" + student.edad);
        edad1.appendChild(cellText1);
        trElement2.appendChild(edad1);
        studentTbody.appendChild(trElement2);
        var trElement4 = document.createElement("tr");
        var direccion = document.createElement("td");
        var cellText = document.createTextNode("Direccion");
        direccion.appendChild(cellText);
        trElement4.appendChild(direccion);
        var d1 = document.createElement("td");
        var cellText1 = document.createTextNode(student.direccion);
        d1.appendChild(cellText1);
        trElement4.appendChild(d1);
        studentTbody.appendChild(trElement4);
        var trElement5 = document.createElement("tr");
        var telefono = document.createElement("td");
        var cellText = document.createTextNode("Telefono");
        telefono.appendChild(cellText);
        trElement5.appendChild(telefono);
        var t = document.createElement("td");
        var cellText1 = document.createTextNode("" + student.telefono);
        t.appendChild(cellText1);
        trElement5.appendChild(t);
        studentTbody.appendChild(trElement5);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function applyFilterByCredits() {
    var s = inputSearchBox2.value.split("-");
    var number1 = Number(s[0]);
    var number2 = Number(s[1]);
    clearCoursesInTable();
    var coursesFiltered = searchCourseByCredits(number1, number2, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByCredits(n, n2, courses) {
    return n === 0 ? dataCourses : courses.filter(function (c) {
        return c.credits >= n && c.credits <= n2;
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
