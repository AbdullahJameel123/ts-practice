type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  department: string;
};


type EmployeeProfile = Person & Employee

const emp1: EmployeeProfile = {
    name: "Mohammed",
    age: 34,
    employeeId: "E344",
    department: "HR",
}


console.log(emp1);
