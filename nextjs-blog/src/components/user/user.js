//User Class
//Model class to create instances of users

class User {
    constructor(user_id, first_name, last_name, phone_number, email) {
        this.user_id = user_id
        this.first_name = first_name
        this.last_name = last_name
        this.phone_number = phone_number
        this.email = email
    }
}
module.exports = User;