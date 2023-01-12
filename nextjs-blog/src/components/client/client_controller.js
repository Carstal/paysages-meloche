//Client Controller
//Handles all requests and methods for the client service & class

//Get Visit By Id
export const getVisitById = (req,res) => {
    const visitId = req.params.id;
    const visit = getVisitByVisitId(visitId);

    return res.json(visit);
};