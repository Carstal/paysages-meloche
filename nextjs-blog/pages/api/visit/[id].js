import { getVisitByVisitId } from "../../../src/components/visit/visit_service";

export default async function handler(req,res){

    const { id } = req.query;
    const project_id = { id }.id;

    console.log("Request value");
    console.log(project_id);
    // console.log({id});

    const visit = await getVisitByVisitId(project_id);
    // const visit = await getVisitByVisitId(req.params.id);

    // res.status(200).json({
    //     visit_id: 1,
    //     project_id: 1,
    //     employee_ids: "12,34,54",
    //     start_date: "2022-12-23",
    //     end_date: "2022-12-23"
    // });
    res.status(200).json({visit});

}