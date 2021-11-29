const {gql} = require('apollo-server-express');
const Post = require('./models/Posts')
const User = require('./models/Users')

const resolvers = {
    Query: {
      hello(){
         return "Heloooooooooooooooooooooo"
        },
        getAll:async ()=>{
            return await Post.find()
        },
        getAllUsers: async ()=>{
            return await User.find()
        }
      
      },
      Mutation:{
        createPost:async (parent,args,context,info)=>{
            const {title,description} = args.post;
            const post = await new Post({title,description}).save();
            return post;
        },

        updatePost:async (parent,args,context,info)=>{
            const {id} = args;
            const {title,description} = args.post;
            const post = await Post.findByIdAndUpdate(
                id,
                {title,description},
                {new:true});
            return post;
        },
        deletePost: async (parent,args,context,info)=>{
            const {id} = args;
            await Post.findByIdAndDelete(id);
            return "Deleted"
        },

        createUser:async (parent,args,context,info)=>{
            const {username,password} = args.user;
            const user = await new User({username,password}).save();
            return user;
        },

      }
    }

    module.exports = resolvers;