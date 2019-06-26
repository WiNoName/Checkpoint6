import Human from './Human.js'
class Student extends Human{
    name;
    job;
    skills;
    constructor(){
        super();
        this.name = "Abderrahman Braham";
        this.job = "Student";
        this.skills = ["Web Developement", "Game Developement"]
    }
}
export default Student;