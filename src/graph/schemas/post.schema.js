import { GraphQLString, GraphQLList, GraphQLNonNull, Graphql } from "graphql";
import types from "../types";
import resolvers from "../resolvers";

const getPosts = { 
    type: new GraphQLList(types.postTypes.PostType),
    args: {
        _id: {
            type: GraphQLString,
        }
    },
    resolve: async(parent, args, context, info) => resolvers.postResolvers.get(parent, args, context, info)
};

const createPost = { 
    type: types.postTypes.PostType,
    args: {
        input: {
            type: new GraphQLNonNull(types.postTypes.PostInputType),
        },
    },
    resolve: async(parent, args, context, info) => resolvers.postResolvers.create(parent, args, context, info)
};

export default {
    getPosts,
    createPost,
};