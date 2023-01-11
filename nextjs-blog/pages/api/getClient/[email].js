import clientPromise from "../../../lib/mongodb";
//import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("FinalProject");
    const { email } = req.query;

    const post = await db.collection("Client").findOne({
      email: email,
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};