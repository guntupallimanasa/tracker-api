const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Post{
    id:ID
    title:String
    description: String
}
type Query{
 hello: String
 getAll : [Post]
}

input PostInput{
    title:String
    description: String
}
type Mutation{
    createPost(post:PostInput):Post
    updatePost(id:String,post:PostInput):Post
    deletePost(id:String):String
}
type User{
    username: String
    password: String
}

type Query{
    getAllUsers: [User]
}

input UserInput{
    username: String
    password: String
}

type Mutation{
    createUser(user: UserInput):User
}

`

module.exports = typeDefs;