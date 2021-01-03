import types from "../types";
import entities from "../entities";
import { parseQueryFields } from "../utils/helpers";

const get = async(parent, args, { models }, info) => {
    if (args._id) {
        return models.PostModel.find({ _id: args._id }, parseQueryFields(info, types.postTypes.PostType));
    }
    return models.PostModel.find({}, parseQueryFields(info, types.postTypes.PostType));
}

const create = async(parent, { input }, { models }, info) => {
    const post = new entities.PostEntities.Post(
        input.title,
        input.content,
        input.created_by
    );
    return models.PostModel.create(post);
}

export default {
    get,
    create,
}