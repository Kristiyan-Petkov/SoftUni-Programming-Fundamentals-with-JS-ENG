function employees(array){
    class Employee {
        constructor (name, personalNumber){
            this.name = name;
            this.personalNumber = personalNumber;
        }
    }
    // let employees = [];
    for (let element of array){
        let newEmployee = new Employee (element, element.length);
        // employees.push(newEmployee);
        console.log(`Name: ${newEmployee.name} -- Personal Number: ${newEmployee.personalNumber}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])