import React from 'react';
import './App.css';
import './style.css';
import './Classes/Human.js'
import Student from './Classes/Student.js';



function App() {
const me = new Student();
me.getJob("Web Developer")
me.learnNewSkill("React")
me.forgetSkill("React")
me.leaveJob()
    
 return(
     null
 )
}

export default App;
