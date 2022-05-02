class Student {


    constructor(name, surname, yob, gender, gradeArray) {
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.gender = gender;
        this.gradeArray = gradeArray;
    }

    calculateGradeMean() {
        let sum = 0;
        for (let i = 0; i < this.gradeArray.length; i++) {
            const grade = this.gradeArray[i];
            sum = sum + grade;
        }

        const mean = sum / this.gradeArray.length;

        return mean;
    }


    calculateAge() {
        const now = new Date();
        const year = now.getFullYear();
        const age = year - this.yob;
        return age;
    }
}