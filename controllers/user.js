const logs = require('../crearLogs');
class controllerUser {
    constructor() {
        this.User = require('../models/User');
    }

    async createUser(dta) {
        const newUser = new this.User(dta);
        return await newUser.save().then(user => {
            return true;
        }).catch(err => {
            logs(err);
            console.log('ttt', typeof err, err.code);
            return err ? err : false;
        });
    }

    async readUsers(query = {}) {
        return await this.User.find(query).select('-__v')
    }

    async readUser(query = {}) {
        return await this.User.findOne(query).select('-__v')
    }

    async updateUsers(query, dta) {
        const updatedta = await this.User.updateMany(query, dta);
        return updatedta.modifiedCount;
    }

    async deleteUsers(query) {
        const deletedta = await this.User.deleteMany(query);
        return deletedta.deletedCount;
    }
}

module.exports = new controllerUser();