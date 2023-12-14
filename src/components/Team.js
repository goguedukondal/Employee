import React from 'react'
import './Team.css'
import { useContext,useState,useEffect } from 'react'
import { myContext } from './Context'
function Team() {
  const [average,setAverage] = useState(0)

  useEffect(()=>{
avg()
  })
    const data=useContext(myContext)
    const {teams,removeTeam,sort} =data;
    // console.log(teams)
    const sum = teams.reduce((ag,employee)=>{
       return ag=ag+employee.age
    },0)
    // const avg=()=>{
      
    // }
    const avg = () => {
      const quotient = Math.floor(sum / teams.length); 
      // Calculate the quotient
      const remainder = sum % teams.length; // Calculate the remainder
      const average = quotient + remainder / teams.length; // Combine quotient and normalized remainder
      setAverage(average);
  };
// console.log(average)
  return (
    <div className='card'>
    <h3 style={{display:'inline-block'}}>TEAMS</h3> <button style={{display:'inline-block',marginLeft:'40px',backgroundColor:'pink',padding:'4px',borderRadius:'8px'}} onClick={()=>sort()}>Sort by Ages</button>
    {teams.map((employee)=>{
      return <div className='e-det' key={employee.id}>
     
      <p>{employee.first_name}{employee.last_name}</p>
      <p>{employee.age}</p>
      <button className='btn-2' onClick={()=>removeTeam(employee.id)}>REMOOVE</button>
  </div>
    })}
    <div className='avg'>
      <h2 >Average : {average}</h2>
    </div>
</div>
  )
}

export default Team