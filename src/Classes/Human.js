class Human {
    name;
    job;
    skills;

    getJob(job){
        this.job = job
        alert(`${this.name} is a new ${this.job}`)
        console.log(`${this.name} is a new ${this.job}`)
    }
    leaveJob(){
        alert(`${this.name} left his job of ${this.job}`)
        console.log(`${this.name} left his job of ${this.job}`)
        this.job = "Unemployed"
    }
    learnNewSkill(skill){
        this.skills.push(skill)
        alert(`${this.name} learned ${skill}. His new skills are ${this.skills}`)
        console.log(`${this.name} learned ${skill}`)
    }
    forgetSkill(skill){
        alert(`${this.name} forgot ${skill}`)
        console.log(`${this.name} forgot ${skill}`)
        this.skills.pop(skill)
    }
}
export default Human;