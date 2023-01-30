import { getClient } from "../../../src/components/client/client_service"
import { getSession } from '@auth0/nextjs-auth0';

export default async function handler(req, res) {
    const { email } = req.query
    const session = await getSession(req, res);

    try{
        const roles = session.user.userRoles
        if(roles == "Admin"){
            console.log("authorized")
            const client = await getClient(email)
            res.json(client)
        }
        
    } catch {
        console.log("not authenticated")
        res.redirect("/access_denied")
    }
}