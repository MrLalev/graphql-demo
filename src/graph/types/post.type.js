import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLFloat,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
} from "graphql";
import userTypes from "./user.types";
import resolvers from "../resolvers";

const PostType = new GraphQLObjectType({
    name: "PostType",
    fields: () => ({
        _id: {
            type: GraphQLString,
        },
        title: {
            type: GraphQLString,
        },
        content: {
            type: GraphQLString,
        },
        created_by: {
            type: GraphQLString,
        },
        creator: {
            type: new GraphQLList(userTypes.UserType),
            resolve: async (parent, args, context, info) =>
                resolvers.userResolvers.get(
                    parent,
                    { _id: parent.created_by },
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

const PostInputType = new GraphQLInputObjectType({
    name: "PostInputType",
    fields: () => ({
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        content: {
            type: new GraphQLNonNull(GraphQLString),
        },
        created_by: {
            type: new GraphQLNonNull(GraphQLString),
        },
    }),
});

export default {
    PostType,
    PostInputType,
};
