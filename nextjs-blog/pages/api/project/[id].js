import { getProjectByProjectId } from "../../../src/components/project/project_service";

export default async function handler(req,res){
    const { id } = req.query;
    const project_id = { id }.id;

    const project = await getProjectByProjectId(project_id);

    res.status(200).json({project});
}