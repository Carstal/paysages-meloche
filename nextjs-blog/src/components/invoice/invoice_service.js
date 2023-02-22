//Invoice Service
//Implements all CRUD Operations relating to invoices to mongoDB

import clientPromise from "../../../lib/mongodb";
import { updateProjectInvoiceByProjectId } from "../project/project_service";

//Add Invoice
export async function createInvoice(invoice) {
    const client = await clientPromise;
    const project_id = invoice.project_id;
    const quote_id = invoice.quote_id;
    const invoice_id = invoice.invoice_id;
    const project_update = {project_id, invoice_id}

    const result = await client
    .db("FinalProject")
    .collection("Invoice")
    .insertOne(invoice);

    const updateProject = await updateProjectInvoiceByProjectId(project_update);

    return result;
}

export async function getInvoiceByProjectId(id) {
    const client = await clientPromise;
    const intId = parseInt(id);
    const result = await client
        .db("FinalProject")
        .collection("Invoice")
        .findOne({ project_id: intId });

    if (result) {
        return result;
    } else {
        return null;
    }
}

export async function getInvoiceByInvoiceId(id) {
    const client = await clientPromise;
    const intId = parseInt(id);
    const result = await client
        .db("FinalProject")
        .collection("Invoice")
        .findOne({ invoice_id: intId });

    if (result) {
        return result;
    } else {
        return null;
    }
}

export async function getNewInvoiceId(){
    var newId = 0;
    try {
        const client = await clientPromise;
        const db = client.db("FinalProject");

        const greatestQuotes = await db.collection("Invoice").find().sort({"invoice_id":-1}).toArray();
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
    createInvoice,
    getNewInvoiceId,
    getInvoiceByInvoiceId,
    getInvoiceByProjectId
}