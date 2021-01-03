import { GraphQLString, GraphQLList, GraphQLNonNull, Graphql } from "graphql";
import types from "../types";
import resolvers from "../resolvers";

const hello = { 
    type: types.greetingTypes.GreetingMessageType,
    args: {},
    resolve: async(parent, args, context, info) => resolvers.greetingResolvers.getGreetingMessage(parent, args, context, info)
};

export default {
    hello,
};