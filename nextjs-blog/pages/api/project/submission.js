//import updateClient from "./updateClient"
import { createProject } from "../../../src/components/project/project_service";

export default async function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
    //console.log(body + "--------------------------------------------------")
    console.log('body: ', body)

    const create = await createProject(body);
  
    //res.status(200).json({ data: `${body.first_name} ${body.last_name}` })
    res.redirect('/')
  }