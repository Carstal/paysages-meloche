//import clientPromise from "../../lib/mongodb";
import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("FinalProject");

       const clients = await db
           .collection("Client")
           .find({})
           .toArray();

       res.json(clients);
   } catch (e) {
       console.error(e);
   }
};