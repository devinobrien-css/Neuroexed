module.exports = {
    Query: {
        Users : (parent,args,{dataSources},info) => {
            return dataSources.userAPI.getUsers()
        },
        fetchUserByID : (parent,{ID},{dataSources},info) => {
            return dataSources.userAPI.getUserByID(ID);
        },
        fetchUser: (parent,args,{dataSources},info) => {
            return dataSources.userAPI.getUsers(agrs);
        }
    }
}