import { createQuote, getNewQuoteId } from "../../../src/components/quote/quote_service";
const Quote = require('../../../src/components/quote/quote');

export default async function handler(req, res) {
    // Get data submitted in request's body.
    let data = req.body

    const userID = parseInt(data.userID);
    const projectID = parseInt(data.projectID);
    var items = JSON.parse(data.items);

    // const parsedItems = items.map(obj =>
    //   Object.fromEntries(Object.entries(obj).map(([key, value]) => {
    //     const parsedValue = parseFloat(value);
    //     return [
    //       key,
    //       isNaN(parsedValue) ? value : parsedValue
    //     ];
    //   })));
    console.log("_____------items submitted-----_____");
    // data.items.forEach(item => {
    //   console.log(item)
    // });
    // data.items.map((item)=>(
    //   items.push(item)
    // ))
    console.log(items);
    const created_date = new Date();
    const quote_id = await getNewQuoteId();

    const newQuote = new Quote(quote_id,userID,projectID, items,created_date);

    const create = await createQuote(newQuote);

    const url = '/project/'+data.projectID
    //res.status(200).json({ data: `${body.first_name} ${body.last_name}` })
    res.redirect(url)
  }