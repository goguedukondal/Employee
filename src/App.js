
import './App.css';

import Employees from './components/Employees';
import Team from './components/Team';
import { myContext } from './components/Context';
import { useState } from 'react';
function App() {
const [teams,setTeams] = useState([])
const [employees,setEmployees] =useState([{"id":1,"first_name":"Jaymee","last_name":"Imm","email":"jimm0@craigslist.org","gender":"Genderqueer","age":80},
{"id":2,"first_name":"Jody","last_name":"Themann","email":"jthemann1@skyrock.com","gender":"Agender","age":29},
{"id":3,"first_name":"Cece","last_name":"Carlet","email":"ccarlet2@jalbum.net","gender":"Male","age":69},
{"id":4,"first_name":"Elton","last_name":"Allinson","email":"eallinson3@jugem.jp","gender":"Male","age":31},
{"id":5,"first_name":"Garvy","last_name":"Shaddick","email":"gshaddick4@rediff.com","gender":"Male","age":32},
{"id":6,"first_name":"Fin","last_name":"Realy","email":"frealy5@unc.edu","gender":"Male","age":26}])



const addToTeam =(employeeid)=>{
  setEmployees(employees.map((e)=>{
   if(e.id===employeeid){
    return {...e,addedToTeam:true}
   }else {
    return e
   }
  }))
  const addedTeam=employees.filter((e)=>e.id===employeeid);
  const existTeams=[...teams,...addedTeam]
  setTeams(existTeams)
}
// console.log(teams)
const removeTeam =(employeeid)=>{
  setEmployees(employees.map((e)=>{
    if(e.id===employeeid){
     return {...e,addedToTeam:false}
    }else {
     return e
    }
   }))
  const updatedTeam =teams.filter((e)=>e.id!==employeeid)
  setTeams(updatedTeam)
}

const sort=()=>{
  setTeams([...teams].sort((a,b)=>a.age-b.age))
}

  return (
    <myContext.Provider value={{employees,addToTeam,teams,removeTeam,sort}}>
      <div className='App'>
        
   <Employees/>
   <Team/>
    </div>
    </myContext.Provider>
    
  );
}

export default App;
