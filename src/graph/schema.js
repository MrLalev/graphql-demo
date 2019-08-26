import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GraphQLString } from "graphql/type/scalars";
import schemas from "./schemas";

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    fields: {
        hello: schemas.greetingSchema.hello,
        getUsers: schemas.userSchema.getUsers,
        getPosts: schemas.postSchema.getPosts,
    }
});

const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    fields: {
        createUser: schemas.userSchema.createUser,
        createPost: schemas.postSchema.createPost,
    }
});

const SubscriptionType = new GraphQLObjectType({
    name: 'SubscriptionType',
    fields: {
        onPostCreated: schemas.postSchema.onPostCreated
    }
});

export default new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
    subscription: SubscriptionType
});