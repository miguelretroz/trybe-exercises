interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName: "John",
  lastName: "Doe",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

interface Teacher extends Employee {
  subject: string;
  sayHello(): string;
}

let teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  subject: "Matemática",
  fullName() {
    return this.firstName + " " + this.lastName;
  },
  sayHello() {
    return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  }
}
