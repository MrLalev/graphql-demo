import bcrypt from "bcrypt";
import types from "../types";
import { parseQueryFields } from "../utils/helpers";
import entities from "../entities";

const get = async(parent, args, { models }, info) => {
    if (args._id) {
        return models.UserModel.find({ _id: args._id }, parseQueryFields(info, types.userTypes.UserType));
    }
    return models.UserModel.find({}, parseQueryFields(info, types.userTypes.UserType));
}

const getUserPosts = async(parent, args, { models }, info) => {
    return models.PostModel.find({ created_by: parent._id }, parseQueryFields(info, types.postTypes.PostType));
}

const findUser = async(parent, args, { models }, info) => {
    return models.UserModel.find({ $or: [
        { first_name: { $regex: args.text, $options: "i" } },
        { last_name: { $regex: args.text, $options: "i" } },
        { email: { $regex: args.text, $options: "i" } } 
    ]}, parseQueryFields(info, types.userTypes.UserType));
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
    findUser,
}