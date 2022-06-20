const { Neo4jGraphQL } = require("@neo4j/graphql");
const { ApolloServer, gql } = require("apollo-server");
const neo4j = require("neo4j-driver");

const typeDefs = require("./schema.js");
const resolvers = require("./resolvers.js");

// IMPORT DATA STORES
const UserAPI = require("./datasources/users");

const AURA_ENDPOINT = "neo4j+s://31dc1aea.databases.neo4j.io:7687";
const USERNAME = "neo4j";
const PASSWORD = "o2aySZ-XjOuxV2awIaiuC5ObfyJ1Ze6ZlzEh_L4a9Z0";

const dataSources = () => ({
    userAPI: new UserAPI()
});

const driver = neo4j.driver(AURA_ENDPOINT, neo4j.auth.basic(USERNAME, PASSWORD));
const neoSchema = new Neo4jGraphQL({ typeDefs, driver });


neoSchema.getSchema().then((schema) => {
    const server = new ApolloServer({
        schema,
        typeDefs,
        resolvers,
        dataSources
    });

   
  
    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
  })