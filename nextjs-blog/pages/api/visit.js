import { getVisits } from "../../src/components/visit/visit_controller";

export default function handler(req,res){

    const allVisits = getVisits();

    res.status(200).json(allVisits);
}