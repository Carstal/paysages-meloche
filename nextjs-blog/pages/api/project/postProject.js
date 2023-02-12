//import { IncrementalCache } from "next/dist/server/lib/incremental-cache";
import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("FinalProject");
    let data = req.body;

    const create = await db.collection("Project").insertOne(data)

    res.json(create);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};