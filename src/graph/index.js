import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GraphQLString } from "graphql/type/scalars";

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    fields: {
        hello: { 
            type: GraphQLString,
            args: {},
            resolve: async(parent, args, context, info) => 'Hello World!'
        }
    }
});

const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    fields: {
    }
});

export default new GraphQLSchema({
    query: QueryType,
    // mutation: MutationType,
});