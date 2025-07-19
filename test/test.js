function printStudentDetails(stud) {
    if (stud.grade) {
        console.log("Name: ".concat(stud.name, ", Roll No: ").concat(stud.rollNo, " Grade: ").concat(stud.grade));
    }
    else {
        console.log("Name: ".concat(stud.name, ", Roll No: ").concat(stud.rollNo));
    }
}
var s1 = { name: "Rahul", rollNo: 101 };
var s2 = { name: "Anita", rollNo: 102, grade: "A" };
printStudentDetails(s1);
printStudentDetails(s2);
