import types from "../types";

const getGreetingMessage = (parent, args, { models }, info) => {
    return {
        message: 'Hello World!',
        created_at: Date.now()
    }
}

export default {
    getGreetingMessage,
}