const {gql} = require("apollo-server");

module.exports = gql`

    type Query {
        fetchUsers:[User],
        fetchUserByID(id:ID): User,
        fetchUser(id:ID, first:String, last:String, email:String): User 
    }


    type User {
        id: ID! @id,
        first: String,
        last: String,
        title: String,
        bio: String,
        email: String,
        img: String,
        skills: [Skill!]! @relationship(type: "HAS_SKILL", properties: "HasSkill", direction: OUT)
    }
 
    type Skill {
        id: ID! @id,
        title: String,
        tags: [String],
        users: [User!]! @relationship(type: "HAS_SKILL", properties: "HasSkill", direction: IN)
    }
    
    interface HasSkill @relationshipProperties {
        rating: Int!,
        isShowcased: Boolean
    }
`;
