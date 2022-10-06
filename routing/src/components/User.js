import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function User() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const {id} = useParams();
    const userNotFound = {h2: "User not found", p: "The user you are looking for does not exist."};

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                setUser(response.data);
            })
            .finally(() => {
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, [ id ]);
    return (
        <div>
            <h2>User</h2>
            {loading && <p>Loading...</p>}
            <p>
                {
                    user.id ?
                        <div>
                            <p><strong>ID:</strong> {user.id}</p>
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Website:</strong> {user.website}</p>
                            <p><strong>Company:</strong> {user.company.name}</p>
                            <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                        </div>
                        :
                        <div>
                            <h2>{userNotFound.h2}</h2>
                            <p>{userNotFound.p}</p>
                            <Link to="/contacts">Back to contacts</Link>
                        </div>
                }
            </p>
            <br/><br />
            <Link to={`/contacts/user/${parseInt(id) - 1}`}>Previous User ({parseInt(id) - 1})</Link><br/>
            <Link to={`/contacts/user/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
        </div>
    );
}

export default User;