import { deleteVisitById } from "../../../../src/components/visit/visit_service"

export default async function handler(req, res) {

    const { id } = req.query;
    const visit_id = { id }.id;
    // const data = req.body;

    // const idk = "id="+visit_id;

    // console.log("Request - DELETE value");
    // console.log(visit_id);

    const visit = await deleteVisitById(visit_id);
    // const visit = await deleteVisit();

    // fetch('http://localhost:3000/api/visit/delete/', {
    //     method: 'PATCH',
    //     headers: {
    //     'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(body),
    // })

    //res.status(200).json({ data: `${body.first_name} ${body.last_name}` })

    // res.status(200).json({visit});
    res.redirect('../../../visit');
}