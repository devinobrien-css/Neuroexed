const {DataSource} = require("apollo-datasource");
const skills = require('../data/skills.json');
const _ = require('lodash');

/**
 * API for accessing skill data
 */
class SkillAPI extends DataSource {
    constructor(){
        super();
    }

    initialize(config){

    }

    getSkills(){
        return skills;
    }

    getSkill(args) {
        return _.filter(skills,args);
    }

    getSkillByID(id) {
        const skills = _.filter(skills, {id:parseInt(id)});
        return skills[0];
    }
}

module.exports = SkillAPI;