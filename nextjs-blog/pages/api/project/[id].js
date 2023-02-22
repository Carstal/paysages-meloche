import { getProjectByProjectId } from "../../../src/components/project/project_service";
import { getQuoteByProjectId } from "../../../src/components/quote/quote_service";
import { getVisitsByProjectId } from "../../../src/components/visit/visit_service";
import { getInvoiceByProjectId } from "../../../src/components/invoice/invoice_service";

export default async function handler(req,res){
    const { id } = req.query;
    const project_id = { id }.id;

    const project = await getProjectByProjectId(project_id);
    const quote = await getQuoteByProjectId(project_id);
    const visits = await getVisitsByProjectId(project_id);
    const invoice = await getInvoiceByProjectId(project_id);

    const allInfo = {project, quote, visits, invoice};
    // console.log(allInfo);

    res.status(200).json({project, quote, visits, invoice});
}