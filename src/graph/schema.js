import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GraphQLString } from "graphql/type/scalars";
import schemas from "./schemas";

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    fields: {
        hello: schemas.greetingSchema.hello,
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