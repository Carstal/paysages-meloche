import { updateClient } from "../../../src/components/client/client_service"
import { getSession } from '@auth0/nextjs-auth0';

export default async function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
    const session = await getSession(req, res);

    try{
        const email = session.user.email
        if(email == body.email){
            console.log("authorized")
            const updated = await updateClient(body);
            res.redirect('/')
        }
        
    } catch {
        console.log("not authenticated")
        res.redirect("/access_denied")
    }
  }