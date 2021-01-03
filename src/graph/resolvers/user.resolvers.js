import bcrypt from "bcrypt";
import types from "../types";
import entities from "../entities";

const get = async(parent, args, { models }, info) => {
    if (args._id) {
        return models.UserModel.find({ _id: args._id });
    }
    return models.UserModel.find();
}

const getUserPosts = async(parent, args, { models }, info) => {
    return models.PostModel.find({ created_by: parent._id});
}

const create = async(parent, { input }, { models }, info) => {
    const password =  await bcrypt.hash(input.password, 12);
    const user = new entities.UserEntities.User(
        input.first_name,
        input.last_name,
        input.email,
        password,
        []
    );
    return models.UserModel.create(user);
}

export default {
    get,
    create,
    getUserPosts,
}