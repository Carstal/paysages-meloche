//import updateClient from "./updateClient"

export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
    //console.log(body + "--------------------------------------------------")
    console.log('body: ', body)

    fetch('http://localhost:3000/api/project/postProject', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  
    //res.status(200).json({ data: `${body.first_name} ${body.last_name}` })
    res.redirect('/')
  }