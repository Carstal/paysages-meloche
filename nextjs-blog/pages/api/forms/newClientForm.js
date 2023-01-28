import { updateClient } from "../../../src/components/client/client_service"
// const Client = require("../../../src/components/client/client");

export default async function handler(req, res) {
    var body = req.body

    //map to object if necessary later
    const updated = await updateClient(body);
    
    res.redirect('http://localhost:3000/api/auth/logout?returnTo=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Flogin')
  }