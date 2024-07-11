// Base class Residence
class Residence {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.occupied = false;
    }

    occupy() {
        this.occupied = true;
    }

    vacate() {
        this.occupied = false;
    }
}

// Subclass DormRoom
class DormRoom extends Residence {
    constructor(name, address, size) {
        super(name, address);
        this.size = size; // in square feet
        this.rent = this.calculateRent();
    }

    calculateRent() {
        return this.size * 10; 
    }
}

// Subclass Apartment
class Apartment extends Residence {
    constructor(name, address, bedrooms) {
        super(name, address);
        this.bedrooms = bedrooms;
        this.rent = this.calculateRent();
    }

    calculateRent() {
        return this.bedrooms * 500; 
    }
}

// Student class
class Student {
    constructor(name, studentID, gender) {
        this.name = name;
        this.studentID = studentID;
        this.gender = gender;
        this.residence = null;
    }

    assignResidence(residence) {
        this.residence = residence;
        residence.occupy();
    }

    removeResidence() {
        if (this.residence) {
            this.residence.vacate();
            this.residence = null;
        }
    }
}

// MaintenanceRequest class
class MaintenanceRequest {
    constructor(description, student) {
        this.description = description;
        this.status = 'submitted'; // can be : submitted, in progress, completed
        this.student = student;
        this.assignedEmployee = null;
    }

    updateStatus(status) {
        this.status = status;
    }

    assignEmployee(employee) {
        this.assignedEmployee = employee;
    }
}

// Demonstration
const dorm = new DormRoom('Dorm 1', '123 University St', 300);
const apartment = new Apartment('Apt 101', '456 College Ave', 3);
const student = new Student('John Doe', 'S123456', 'Male');

console.log(dorm); 
console.log(apartment);

student.assignResidence(dorm); 
console.log(student);

const maintenanceRequest = new MaintenanceRequest('Broken heater', student);
console.log(maintenanceRequest);
maintenanceRequest.updateStatus('in progress');
console.log(maintenanceRequest);
