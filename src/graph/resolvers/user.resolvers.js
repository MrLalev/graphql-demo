import bcrypt from "bcrypt";
import types from "../types";

const get = async(parent, args, { models }, info) => {
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