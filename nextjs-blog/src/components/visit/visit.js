//Visit Class
//Model class to create instances of visits

class Visit{
    constructor(visit_id, project_id, employee_ids, start_date, end_date){
        this.visit_id = visit_id;
        this.project_id = project_id;
        this.employee_ids = employee_ids;
        this.start_date = start_date;
        this.end_date = end_date;
    }
}

module.exports = Visit;