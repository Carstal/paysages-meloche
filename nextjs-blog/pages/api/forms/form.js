export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body

    fetch('http://localhost:3000/api/client/updateClient', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    res.redirect('/')
  }