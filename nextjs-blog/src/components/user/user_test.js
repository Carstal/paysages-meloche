

// import clientPromise from "../../../lib/mongodb";
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://Mohaned:0000@cluster0.gvkvlw9.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const voidRun = runAllTests();

async function runAllTests(){
//   console.log("CREATE VISIT 2255")
//   const createdVis = await addVisit(visitOne);
//   console.log(createdVis);

    console.log("GET USER 234322")
    const readUser = await getUserById(234322);
    console.log(readUser);


    console.log("IS USER 234322 EMPLOYEE")
    const isEmp = await isUserEmployee(234322);
    console.log(isEmp);

//   console.log("UPDATE VISIT 2255")
//   const updatedVis = await updateVisit(updateOne);
//   console.log(updatedVis);

//   console.log("DELETE VISIT 2255")
//   const deletedVis = await deleteVisitById(2255);
//   console.log(deletedVis);

    return null;
}

async function getUserById(id) {
    try {
        // const client = await clientPromise;
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

async function isUserEmployee(id){
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