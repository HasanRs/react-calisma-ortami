import {useEffect, useState} from 'react';
import axios from "axios";

function UsersAxios() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])
    return (
        <div>
            <h2>Users Axios</h2>
            {loading ? <p>Loading...</p> : users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
}

export default UsersAxios;