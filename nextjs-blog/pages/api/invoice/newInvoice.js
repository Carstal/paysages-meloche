import { createInvoice, getNewInvoiceId } from "../../../src/components/invoice/invoice_service";
const Invoice = require('../../../src/components/invoice/invoice');

export default async function handler(req, res) {
    // Get data submitted in request's body.
    let data = req.body

    const userID = parseInt(data.userID);
    const quoteID = parseInt(data.quoteID);
    const projectID = parseInt(data.projectID);
    var items = JSON.parse(data.items);
    // console.log("_____------items submitted-----_____");
    // console.log(items);
    const created_date = new Date();
    const invoice_id = await getNewInvoiceId();

    const newInvoice = new Invoice(invoice_id,quoteID,userID,projectID,items,created_date);

    const create = await createInvoice(newInvoice);

    const url = '/project/'+data.projectID
    //res.status(200).json({ data: `${body.first_name} ${body.last_name}` })
    res.redirect(url)
}