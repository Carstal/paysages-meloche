//Invoice Class
//Model class to create instances of invoices

class Invoice{
    constructor(invoice_id, quote_id, user_id, project_id, items, date_created){
        this.invoice_id = invoice_id;
        this.quote_id = quote_id;
        this.user_id = user_id;
        this.project_id = project_id;
        this.items = items;
        this.date_created = date_created;
    }
}

module.exports = Invoice;