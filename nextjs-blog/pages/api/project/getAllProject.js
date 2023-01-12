
import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("FinalProject");

       const project = await db
           .collection("Project")
           .find({})
           .toArray();

       res.json(project);
   } catch (e) {
       console.error(e);
   }
};