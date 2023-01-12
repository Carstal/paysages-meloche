import { updateVisit } from "../../../../src/components/visit/visit_controller"

export default async function handler(req, res) {

    // const { id } = req.query
    const data = req.body;
    // const visit_id = { id }.id;

    // const idk = "id="+visit_id;

    console.log("Request - UPDATE value");
    console.log(data.visitId);

    const visitInfo = fetch('http://localhost:3000/api/visit/update', {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON(body),
    })

    const visit = await updateVisit(visitInfo);

    //res.status(200).json({ data: `${body.first_name} ${body.last_name}` })

    res.status(200).json({visit});
}