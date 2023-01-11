export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body

    fetch('http://localhost:3000/api/updateClient', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    res.redirect('http://localhost:3000/api/auth/logout?returnTo=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Flogin')
  }