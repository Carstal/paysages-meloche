import { getVisitByVisitId } from "../../src/components/visit/visit_controller"

export default function handler(req,res){

    const visit = getVisitByVisitId({id})

    // res.status(200).json({
    //     visit_id: 1,
    //     project_id: 1,
    //     employee_ids: "12,34,54",
    //     start_date: "2022-12-23",
    //     end_date: "2022-12-23"
    // });
    res.status(200).json(visit);
}