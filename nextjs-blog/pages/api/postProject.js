import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("FinalProject");
    let data = req.body;

    const create = await db.collection("Project").insertOne({data})

    res.json(data);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};