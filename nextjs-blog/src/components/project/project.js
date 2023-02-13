//Project Class
//Model class to create instances of projects

class Project {
    constructor(project_id,user_id,address,service,dimensions,description) {
        this.project_id = project_id;
        this.user_id = user_id;
        this.address = address;
        this.service = service;
        this.dimensions = dimensions;
        this.description = description;
        this.status = "Awaiting Approval";
        this.quote_id = null;
        this.visits = null;
        this.start_date = null;
        this.end_date = null;
        this.invoice_id = null;
    }

    getService() {
        return this.service;
    }
    getWidth() {
        return this.width;
    }
    getLength() {
        return this.length;
    }
    getDescription() {
        return this.description;
    }
}