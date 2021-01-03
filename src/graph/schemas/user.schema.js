import { GraphQLString, GraphQLList, GraphQLNonNull, Graphql } from "graphql";
import types from "../types";
import resolvers from "../resolvers";

const getUsers = { 
    type: new GraphQLList(types.userTypes.UserType),
    args: {
        _id: {
            type: GraphQLString,
        }
    },
    resolve: async(parent, args, context, info) => resolvers.userResolvers.get(parent, args, context, info)
};

const createUser = { 
    type: types.userTypes.UserType,
    args: {
        input: {
            type: new GraphQLNonNull(types.userTypes.UserInputType),
        },
    },
    resolve: async(parent, args, context, info) => resolvers.userResolvers.create(parent, args, context, info)
};

export default {
    getUsers,
    createUser,
};