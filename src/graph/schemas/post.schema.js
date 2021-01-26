import {
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    Graphql,
    subscribe,
} from "graphql";
import types from "../types";
import resolvers from "../resolvers";
import constants from "../utils/constants";

const getPosts = {
    type: new GraphQLList(types.postTypes.PostType),
    args: {
        _id: {
            type: GraphQLString,
        },
    },
    resolve: async (parent, args, context, info) =>
        resolvers.postResolvers.get(parent, args, context, info),
};

const createPost = {
    type: types.postTypes.PostType,
    args: {
        input: {
            type: new GraphQLNonNull(types.postTypes.PostInputType),
        },
    },
    resolve: async (parent, args, context, info) =>
        resolvers.postResolvers.create(parent, args, context, info),
};

const onPostCreate = {
    type: types.postTypes.PostType,
    args: {},
    subscribe: async (parent, args, context, info) =>
        context.pubsub.asyncIterator(constants.subscriptionTopics.POSTS.CREATE),
};

const removePost = {
    type: types.postTypes.PostType,
    args: {
        _id: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve: async (parent, args, context, info) =>
        resolvers.postResolvers.remove(parent, args, context, info),
};

export default {
    getPosts,
    createPost,
    onPostCreate,
    removePost,
};
