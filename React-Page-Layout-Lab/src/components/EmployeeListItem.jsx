import React from "react";


function EmployeeListItem({name, post}) {
    return (
        <div className="EmployeeListItem">
            <div className="EmployeeName">{name}</div>
            <div className="EmployeePost">{post}</div>
            </div>
          
    );
}

export default EmployeeListItem;