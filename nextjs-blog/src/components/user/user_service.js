//User Service
//Implements all CRUD Operations relating to users to mongoDB

import clientPromise from "../../../lib/mongodb";

export async function getUserById(id) {
    try {
        const client = await clientPromise;
        // console.log("----User ID Promise-----");
        // console.log(id)
        const db = client.db("FinalProject");

        const intId = parseInt(id);

        const result = await db.collection("User")
        .findOne({ user_id: intId });
        // console.log("---user retrieved----")
        // console.log(result);
        return result
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};


export async function getUserByEmail(email) {
    try {
        const client = await clientPromise;
        // console.log("----User ID Promise-----");
        // console.log(id)
        const db = client.db("FinalProject");

        const result = await db.collection("User")
        .findOne({ email: email });
        // console.log("---user retrieved----")
        // console.log(result);
        return result
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};

export async function isEmployee(id){
    try{
        const user = await getUserById(id);
        // console.log("----USER Retrieved----");
        // console.log(user);
        const employee = user.isEmployee;
        // console.log("----Is Employee?----");
        // console.log(employee);

        return employee;
    }
    catch(e){
        console.error(e);
        throw new Error(e).message;
    }
};