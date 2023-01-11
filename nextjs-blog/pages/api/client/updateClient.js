// import clientPromise from "../../lib/mongodb";
import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("FinalProject");
    let data = req.body;

    const updated = await db.collection("Client").updateOne({ email: data.email }, { $set: data })

    res.json(data);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};