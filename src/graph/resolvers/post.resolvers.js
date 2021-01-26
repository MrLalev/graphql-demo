import types from "../types";
import entities from "../entities";
import { parseQueryFields } from "../utils/helpers";
import { ApolloError } from "apollo-server";
import constants from "../utils/constants";

const get = async (parent, args, { models }, info) => {
    if (args._id) {
        return models.PostModel.find(
            { _id: args._id },
            parseQueryFields(info, types.postTypes.PostType)
        );
    }
    return models.PostModel.find(
        {},
        parseQueryFields(info, types.postTypes.PostType)
    );
};

const create = async (parent, { input }, { models, pubsub }, info) => {
    const post = new entities.PostEntities.Post(
        input.title,
        input.content,
        input.created_by
    );

    try {
        const newPost = await models.PostModel.create(post);
        pubsub.publish(constants.subscriptionTopics.POSTS.CREATE, {
            onPostCreate: newPost,
        });
        return newPost;
    } catch (error) {
        throw new ApolloError(error.message, error.code);
    }
};

const findPost = async (parent, args, { models }, info) => {
    return models.PostModel.find(
        { $or: [{ title: { $regex: args.text, $options: "i" } }] },
        parseQueryFields(info, types.postTypes.PostType)
    );
};

const remove = async (parent, args, context, info) => {
    return context.models.PostModel.findOneAndRemove({ _id: args._id });
};

export default {
    get,
    create,
    findPost,
    remove,
};
