import React from 'react';
import { useRouter } from "next/router";

const VisitCard = ({visit}) => {
    const router = useRouter()
    function formatEmployees(emp_ids){
      var formattedEmployees = ""
      const employees = emp_ids.map((emp) =>
        formattedEmployees = formattedEmployees + " " + emp
      );
      return formattedEmployees;
    }
    function formatDate(date){
      let newDate = new Date(date);
      let dd = newDate.getDate()+1;
      let mm = newDate.getMonth()+1;
      const yyyy = newDate.getFullYear();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      const formattedDate = yyyy + '-' + mm + '-' + dd;

      return formattedDate;
    }
    return (
            <div className="visit">
              <div className="info">
                <div className="vrRow">
                  Visit:{visit.visit_id} Project: {visit.project_id}
                </div>
                <div className="empRow">
                  Employee(s): {formatEmployees(visit.employee_ids)}
                </div>
                <div className="startRow">
                  Start Date: {formatDate(visit.start_date)}
                </div>
                <div className="endRow">
                  End Date: {formatDate(visit.end_date)}
                </div>
              </div>
              <div className="editBtnDiv">
                <button
                  className="editBtn"
                  name="edit"
                  value={visit.visit_id}
                  onClick={() =>
                    router.push({
                      pathname: "/visit/[id]",
                      query: { id: visit.visit_id },
                    })
                  }
                >
                  Edit
                </button>
              </div>
            </div>
    )}

export default VisitCard;