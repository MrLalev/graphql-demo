import types from "../types";
import entities from "../entities";

const get = async(parent, args, { models }, info) => {
    if (args._id) {
        return models.PostModel.find({ _id: args._id });
    }
    return models.PostModel.find();
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