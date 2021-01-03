import { GraphQLString, GraphQLList, GraphQLNonNull } from "graphql";
import types from "../types";
import resolvers from "../resolvers";

const search = { 
    type: new GraphQLList(types.unionTypes.UnionSearchType),
    args: {
        text: {
            type:  new GraphQLNonNull(GraphQLString),
        }
    },
    resolve: async(parent, args, context, info) => {
        const userData = await resolvers.userResolvers.findUser(parent, args, context, info);
        const postsData = await resolvers.postResolvers.findPost(parent, args, context, info);

        return [
            ...userData,
            ...postsData
        ];
    }
};

export default {
    search,
};