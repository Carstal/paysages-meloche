//User Service
//Implements all CRUD Operations relating to users to mongoDB

import clientPromise from "../../../lib/mongodb";

export async function getUserById(id) {
    try {
        const client = await clientPromise;
        const db = client.db("FinalProject");

        const result = await db.collection("User").findOne({
        user_id: id,
        });
        return result
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};

export async function isEmployee(id){
    try{
        const user = await getUserById(id)
        const employee = user.isEmployee

        return employee
    }
    catch(e){
        console.error(e);
        throw new Error(e).message;
    }
};