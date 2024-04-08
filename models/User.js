const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

class modelUser {
    constructor() {
        this.User = require('../db/User');
        this.logs = require('../crearLogs');
    }

    async createUser(dta) {
        //bcrypt.compareSync(dta.password, hash_BD);
        const hash = bcrypt.hashSync(dta.password, salt);
        dta.password = hash;
        const newUser = new this.User(dta);
        return await newUser.save().then(user => {
            return true;
        }).catch(err => {
            this.logs(err);
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

module.exports = new modelUser();