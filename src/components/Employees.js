import React, { useContext } from "react";
import "./Employees.css";

import { myContext } from "./Context";
function Employees() {
  const data = useContext(myContext);
  // console.log(data)
  const { employees, addToTeam } = data;
  // console.log(teams)
  // console.log(employees)
 

  return (
    <div className="card">
      <h3>Employees</h3>
      {employees.map((employee) => {
         
         
        return (
          <div className="e-det" key={employee.id}>
            <p>
              {employee.first_name}
              {employee.last_name}
            </p>
            <p>{employee.age}</p>
           {/* {console.log(employee.addedToTeam)} */}
            <button className={employee.addedToTeam?'vanish':'btn'} onClick={() => addToTeam(employee.id)}   >
              ADD
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Employees;
