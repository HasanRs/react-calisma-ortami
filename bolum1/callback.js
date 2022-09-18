import axios from "axios";

const getUsers = (number) => {
    return new Promise(async(resolve, reject) => {
        const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + number)
        resolve(user)
    })
}

const getPost = (post_id) => {
    return new Promise(async(resolve, reject) => {
        const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id)
        resolve(post)
    })
}

export { getUsers, getPost}