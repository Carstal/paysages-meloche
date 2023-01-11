import { getVisitByVisitId } from "../../../src/components/visit/visit_service";
import { useRouter } from "next/router";

const id = () => {
    const router = useRouter();
    const id = router.query.id;

    return id;
};

export default async function handler(req,res){

    // const router = useRouter();
    const project_id = id;

    console.log("Router value");
    console.log(project_id);

    // console.log("Request value");
    // console.log(req.params.id)

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