//Quote Service
//Implements all CRUD Operations relating to quotes to mongoDB
import clientPromise from "../../../lib/mongodb";

//Add Visit
export async function createQuote(quote) {
    const client = await clientPromise;

    const result = await client
    .db("FinalProject")
    .collection("Quote")
    .insertOne(quote);

    return result;
}

export async function getNewQuoteId(){
    var newId = 0;
    try {
        const client = await clientPromise;
        const db = client.db("FinalProject");

        const greatestQuotes = await db.collection("Quote").find().sort({"quote_id":-1}).toArray();
        const greatestId = greatestQuotes[0].quote_id;

      // console.log('-----GreatestID-----');
      // console.log(greatestId)

        newId = greatestId + 1;

        return newId;
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
        return e;
    }
}


module.exports = {
    createQuote,
    getNewQuoteId
}