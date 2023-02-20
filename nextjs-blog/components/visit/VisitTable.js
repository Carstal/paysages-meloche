import React from 'react';
import { useRouter } from "next/router";

const VisitTable = ({visits}) => {
    const router = useRouter()
    function formatDate(date){
    let newDate = new Date(date);
    let dd = newDate.getDate()+1;
    let mm = newDate.getMonth()+1;
    const yyyy = newDate.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedDate = yyyy + '-' + mm + '-' + dd;
    // console.log(formattedDate);

    return formattedDate;
    }
    return (

        <div className="card mt-5">
        <div className="center-col">
            <table>
            <tr>
                <th>User ID</th>
                <th>Project ID</th>
                <th>Start Date</th>
                <th>End Date</th>
            </tr>
            {visits.map((visit, key) => {
                return (
                    <tr key={key}
                    onClick={() =>
                    router.push({
                        pathname: "/visit/[id]",
                        query: { id: visit.visit_id },
                    })
                    }
                    >
                    <td>{visit.user_id}</td>
                    <td>{visit.project_id}</td>
                    <td>{formatDate(visit.start_date)}</td>
                    <td>{formatDate(visit.end_date)}</td>
                    </tr>
                );
            })}
            </table>
        </div>
        </div>
    )
}

export default VisitTable;