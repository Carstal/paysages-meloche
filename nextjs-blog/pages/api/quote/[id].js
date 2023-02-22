import { getQuoteByQuoteId } from "../../../src/components/quote/quote_service";

export default async function handler(req,res){
    const { id } = req.query;
    const quote_id = { id }.id;

    const quote = await getQuoteByQuoteId(quote_id);

    res.status(200).json({quote});
}