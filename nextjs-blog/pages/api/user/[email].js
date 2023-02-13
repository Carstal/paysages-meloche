import { getUserByEmail } from "../../../src/components/user/user_service";

export default async function handler(req,res){

    const { query } = req.query;
    const email = { query }.email;

    const user = await getUserByEmail(email);

    res.status(200).json({user});

}