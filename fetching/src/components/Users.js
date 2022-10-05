import { useEffect, useState } from 'react';

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) => {
                setUsers(data);
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
            <h2>Users</h2>
            {loading ? <p>Loading...</p> : users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
}

export default Users;