import bcrypt from "bcrypt";
import types from "../types";
import { parseQueryFields } from "../utils/helpers";

const get = async(parent, args, { models }, info) => {
    if (args._id) {
        return models.UserModel.find({ _id: args._id }, parseQueryFields(info, types.userTypes.UserType));
    }
    return models.UserModel.find();
}

const create = async(parent, { input }, { models }, info) => {
    let user = input;
    user.password = await bcrypt.hash(user.password, 12);
    return models.UserModel.create(user);
}

export default {
    get,
    create,
}