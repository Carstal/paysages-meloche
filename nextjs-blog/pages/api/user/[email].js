import { getUserByEmail } from "../../../src/components/user/user_service";

export default async function handler(req,res){

    const { email } = req.query;
    // console.log("------QUERY RECEIVED-----")
    // console.log({ email });
    const userEmail = { email }.email;
    // console.log("------EMAIL RECEIVED-----")
    // console.log(userEmail);

    const user = await getUserByEmail(email);

    // console.log("------API USER RECEIVED-----")
    // console.log(user);

    res.status(200).json({user});

}