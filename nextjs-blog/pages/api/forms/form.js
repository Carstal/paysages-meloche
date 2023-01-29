import { updateClient } from "../../../src/components/client/client_service"
import { getSession } from '@auth0/nextjs-auth0';

export default async function handler(req, res) {
    // Get data submitted in request's body.
    var body = req.body
    const session = await getSession(req, res);

    // converts is_employee to boolean
    if(body.is_employee != undefined){
        var value = body.is_employee
        var fix = (value === "true")
        body = {email: body.email, first_name: body.first_name, last_name: body.last_name, phone_number: body.phone_number, is_employee: fix}
    }

    try{
        const email = session.user.email
        const role = session.user.userRoles
        if(email == body.email || role == "Admin"){
            console.log("authorized")
            const updated = await updateClient(body);
            res.redirect('/')
        }
        
    } catch {
        console.log("not authenticated")
        res.redirect("/access_denied")
    }
  }