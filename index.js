import { getUsers, getPost } from "./callback.js";

Promise.all([getUsers(1), getPost(1)])
    .then(console.log)
    .catch(console.log)