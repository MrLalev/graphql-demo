import { 
    GraphQLObjectType,
    GraphQLInt, 
    GraphQLString,
    GraphQLFloat,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull
} from "graphql";

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        _id: {
            type: GraphQLString
        },
        first_name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        created_at: {
            type: GraphQLString
        },
        updated_at: {
            type: GraphQLString
        },
    })
});

const UserInputType = new GraphQLInputObjectType({
    name: 'UserInputType',
    fields: () => ({
        first_name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        last_name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
});

export default {
    UserType,
    UserInputType,
}