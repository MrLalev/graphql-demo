import { 
    GraphQLUnionType,
} from "graphql";
import userTypes from "./user.types";
import postTypes from "./post.type";

const unionSearchResolveType = (data) => {
    return data.title ? postTypes.PostType : userTypes.UserType;
}

const UnionSearchType = new GraphQLUnionType({
    name: 'UnionSearchType',
    types: [ userTypes.UserType, postTypes.PostType ],
    resolveType: async(data) => unionSearchResolveType(data)
});

export default {
    UnionSearchType,
}