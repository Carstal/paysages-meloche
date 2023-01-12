import { deleteVisit } from "../../../src/components/visit/visit_controller"

export default async function handler(req, res) {

    const { id } = req.query
    const visit_id = { id }.id;

    console.log("Request value");
    console.log(visit_id);

    const visit = await deleteVisit(visit_id);

    // fetch('http://localhost:3000/api/updateClient', {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // })

    //res.status(200).json({ data: `${body.first_name} ${body.last_name}` })

    res.status(200).json({visit});
}