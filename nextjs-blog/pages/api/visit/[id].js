import { useRouter } from 'next/router'
import { getVisitByVisitId } from "../../src/components/visit/visit_controller";

export default function handler(req,res){

    const router = useRouter()
    const {id} = router.query
    const visit = getVisitByVisitId({id})

    res.status(200).json(visit);
}