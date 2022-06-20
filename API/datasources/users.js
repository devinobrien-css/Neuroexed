const {DataSource} = require("apollo-datasource");
const users = require('../data/users.json');
const _ = require('lodash');

/**
 * API for accessing user data
 */
class UserAPI extends DataSource {
    constructor(){
        super();
    }

    initialize(config){

    }

    getUsers(){
        return users;
    }

    getUsers(args) {
        return _.filter(users,args);
    }

    getUserByID(id) {
        const users = _.filter(users, {id:parseInt(id)});
        return users[0];
    }
}

module.exports = UserAPI;