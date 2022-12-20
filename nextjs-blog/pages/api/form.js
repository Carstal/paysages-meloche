//import updateClient from "./updateClient"

export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
    //console.log(body + "--------------------------------------------------")
    console.log('body: ', body)

    fetch('http://localhost:3000/api/updateClient', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    //updateClient({ email: `${body.email}`, first_name: `${body.first_name}`, last_name: `${body.last_name}`, phone_number: `${body.phone_number}`})

    res.status(200).json({ data: `${body.first_name} ${body.last_name}` })
  }