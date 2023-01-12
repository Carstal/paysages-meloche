// import clientPromise from "../../../lib/mongodb";
//import { ObjectId } from "mongodb";
import { getClient } from "../../../src/components/client/client_service"

export default async function handler(req, res) {
    const { email } = req.query

    const client = await getClient(email)
    res.json(client)
}