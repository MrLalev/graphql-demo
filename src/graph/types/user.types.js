import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLFloat,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
} from "graphql";
import postTypes from "./post.type";
import resolvers from "../resolvers";

const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: () => ({
        _id: {
            type: GraphQLString,
        },
        first_name: {
            type: GraphQLString,
        },
        last_name: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        posts: {
            type: new GraphQLList(postTypes.PostType),
            resolve: async (parent, args, context, info) =>
                resolvers.userResolvers.getUserPosts(
                    parent,
                    args,
                    context,
                    info
                ),
        },
        created_at: {
            type: GraphQLString,
        },
        updated_at: {
            type: GraphQLString,
        },
    }),
});

const UserInputType = new GraphQLInputObjectType({
    name: "UserInputType",
    fields: () => ({
        first_name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        last_name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
        },
    }),
});

export default {
    UserType,
    UserInputType,
};
