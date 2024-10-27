function Student(firstName, lastName, birthYear, grades = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthYear = birthYear
    this.grades = grades
    this.attendance = new Array(25)  
    this.getAge = function() {
        const currentYear = new Date().getFullYear()
        return currentYear - this.birthYear
    };

    this.getAverageGrade = function() {
        const total = this.grades.reduce((sum, grade) => sum + grade, 0)
        return total / this.grades.length
    }

    this.present = function() {
        this.attendance.push(true)
    }

    this.absent = function() {
        this.attendance.push(false)
    }

    this.getAttendanceRate = function() {
        const attendedClasses = this.attendance.filter(day => day === true).length
        return attendedClasses / 25
    }
    this.summary = function() {
        const avgGrade = this.getAverageGrade()
        const attendanceRate = this.getAttendanceRate()

        if (avgGrade > 90 && attendanceRate > 0.9) {
            return "Молодець"
        } else if (avgGrade > 90 || attendanceRate > 0.9) {
            return "Добре але можна краще"
        } else {
            return "Редиска"
        }
    };
}


const student1 = new Student("Іван", "Іваненко", 2003, [95, 88, 92]);
const student2 = new Student("Ольга", "Петренко", 2002, [85, 90, 78]);

student1.present();
student1.absent();
student1.present();

student1.absent();
student1.present();
student1.absent();


console.log(student1.getAge());
console.log(student1.getAverageGrade());
console.log(student1.getAttendanceRate());
console.log(student1.summary());
console.log(student2.getAge());
console.log(student2.getAverageGrade());
console.log(student2.getAttendanceRate());
console.log(student2.summary());
