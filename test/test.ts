interface Student{
    name: string
    rollNo: number
    grade?: string 

    

}

function printStudentDetails(stud: Student) {
    if(stud.grade){
        console.log(`Name: ${stud.name}, Roll No: ${stud.rollNo} Grade: ${stud.grade}`);
    }
    else{
        
        console.log(`Name: ${stud.name}, Roll No: ${stud.rollNo}`);
    }
}


const s1: Student = { name: "Rahul", rollNo: 101 };
const s2: Student = { name: "Anita", rollNo: 102, grade: "A" };

printStudentDetails(s1)
printStudentDetails(s2)