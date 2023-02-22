//Quote Service
//Implements all CRUD Operations relating to quotes to mongoDB
import clientPromise from "../../../lib/mongodb";
import { updateProjectQuoteByProjectId } from "../project/project_service";

//Add Quote
export async function createQuote(quote) {
    const client = await clientPromise;
    const project_id = quote.project_id;
    const quote_id = quote.quote_id;
    const project_update = {project_id, quote_id}

    const result = await client
    .db("FinalProject")
    .collection("Quote")
    .insertOne(quote);

    const updateProject = await updateProjectQuoteByProjectId(project_update);

    return result;
}

export async function getQuoteByProjectId(id) {
    const client = await clientPromise;
    const intId = parseInt(id);
    const result = await client
        .db("FinalProject")
        .collection("Quote")
        .findOne({ project_id: intId });

    if (result) {
        return result;
    } else {
        return null;
    }
}

// export async function getProjectByProjectId(id) {
//     const client = await clientPromise;
//     // console.log("----SERVICE - ID Provided-----");
//     // console.log(id);
//     const intId = parseInt(id);
//     const result = await client
//       .db("FinalProject")
//       .collection("Project")
//       .findOne({ project_id: intId });

//     if (result) {
//       return result;
//     } else {
//       return null;
//     }
//   }

export async function getNewQuoteId(){
    var newId = 0;
    try {
        const client = await clientPromise;
        const db = client.db("FinalProject");

        const greatestQuotes = await db.collection("Quote").find().sort({"quote_id":-1}).toArray();
        const greatestId = greatestQuotes[0].quote_id;

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
    getNewQuoteId,
    getQuoteByProjectId
}