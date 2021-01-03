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
        revers_message: {
            type: GraphQLString,
            resolve: (parent, args, context, info) => parent.message.split("").reverse().join("")
        }
    })
});

export default {
    GreetingMessageType,
}