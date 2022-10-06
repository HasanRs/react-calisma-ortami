import {Link, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Contacts() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data);
            })
            .finally(() => {
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <h2>Contacts</h2>
            {loading && <p>Loading...</p>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/contacts/user/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
}

export default Contacts;