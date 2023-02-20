//Quote Class
//Model class to create instances of quotes

class Quote{
    constructor(quote_id, user_id, project_id, items, date_created){
        this.quote_id = quote_id;
        this.user_id = user_id;
        this.project_id = project_id;
        this.items = items;
        this.date_created = date_created;
    }
}

module.exports = Quote;