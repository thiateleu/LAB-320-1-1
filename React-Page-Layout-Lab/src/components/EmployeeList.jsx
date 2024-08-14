import React from "react";
import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {
    return (
        <div className="EmployeeList">
            <EmployeeListItem id={1} name="Khadija Mbaye"  post="CEO"  />
            <EmployeeListItem id={1} name= "Mary Lusemi"  post= "HR" />
            <EmployeeListItem id={1} name= "Nahid  Yade"  post= 'Marketing' />
            <EmployeeListItem id={1} name= "Mary Bngoura" post= "Manager" />
            <EmployeeListItem id={1} name= "Oumar Ba" post= "Supervisor" />
            <EmployeeListItem id={1} name= "Francis Noe"  post= "Engineer" />
            <EmployeeListItem id={1} name= "Anta Diouf"  post= "Sales" />
        </div>
    );
}

export default EmployeeList;