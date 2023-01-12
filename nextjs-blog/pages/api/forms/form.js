import { updateClient } from "../../../src/components/client/client_service"

export default async function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
    const updated = await updateClient(body);

    // fetch('http://localhost:3000/api/client/updateClient', {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // })
    res.redirect('/')
  }