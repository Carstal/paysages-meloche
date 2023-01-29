import { isEmployee } from "../../../../src/components/user/user_service";
import { getVisitsByEmpId, getVisitsByUserId } from "../../../../src/components/visit/visit_service";

export default async function handler(req,res){

    const { id } = req.query;
    const user_id = { id }.id;
    console.log("Request - GET value");
    console.log(user_id);
    console.log({id});


    const isEmp = await isEmployee(user_id);

    if(isEmp){
        //get visits by employee id
        const visits = await getVisitsByEmpId(id);

        res.status(200).json({visits});
    }
    else{
        //get visits by user id
        const visits = await getVisitsByUserId(id);

        res.status(200).json({visits});
    }
}