
import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

import { Student } from './student.js';

import {dataStudent } from './dataStudent.js'

let studentTbody: HTMLElement = document.getElementById('student')!;
let coursesTbody: HTMLElement = document.getElementById('courses')!;

const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnfilterByCredits: HTMLElement = document.getElementById("button-filterByCredits")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const inputSearchBox2: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box2")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();
btnfilterByCredits.onclick = () => applyFilterByCredits();
renderStudentInTable(dataStudent);
renderCoursesInTable(dataCourses);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`



function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
                           
    coursesTbody.appendChild(trElement);
  });
}

function renderStudentInTable(s: Student[]): void {
  console.log('Desplegando estudiante');
   s.forEach((student) => {
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

    let trElement4 = document.createElement("tr");
    let direccion = document.createElement("td");
    var cellText = document.createTextNode("Direccion");
    direccion.appendChild(cellText);
    trElement4.appendChild(direccion);
    var d1 = document.createElement("td");
    var cellText1 = document.createTextNode(student.direccion);
    d1.appendChild(cellText1);
    trElement4.appendChild(d1);
    studentTbody.appendChild(trElement4);

    let trElement5 = document.createElement("tr");
    let telefono = document.createElement("td");
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
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}

function applyFilterByCredits() { 
  let s = inputSearchBox2.value.split("-");
  let number1 = Number(s[0]);
  let number2 = Number(s[1]);
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByCredits(number1, number2, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByCredits(n: number, n2: number, courses: Course[]) {
  return n === 0 ? dataCourses : courses.filter( c => 
    c.credits>=n && c.credits<= n2);
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}