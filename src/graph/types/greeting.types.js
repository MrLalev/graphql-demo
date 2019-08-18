import { GraphQLObjectType, GraphQLString, } from "graphql";

const GreetingMessageType = new GraphQLObjectType({
    name: 'GreetingMessageType',
    fields: () => ({
        message: {
            type: GraphQLString
        },
        created_at: {
            type: GraphQLString
        },
    })
});

export default {
    GreetingMessageType,
}