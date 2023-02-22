import { getQuoteByProjectId } from "../../../../src/components/quote/quote_service";

export default async function handler(req,res){
    const { id } = req.query;
    const project_id = { id }.id;

    const project = await getQuoteByProjectId(project_id);

    res.status(200).json({project});
}