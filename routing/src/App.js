import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

// Home component is the default component that will be rendered when the user visits the root path of the application
import Home from "./components/Home";
// About component is the component that will be rendered when the user visits the /about path of the application
import About from "./components/About";
// Contact component is the component that will be rendered when the user visits the /contact path of the application
import Contacts from "./components/Contacts";
// User component is the component that will be rendered when the user visits the /contact path of the application
import User from "./components/User";
// Error404 component is the component that will be rendered when the user visits a path that does not exist in the application
import Error404 from "./components/404";

function App() {
    return (
        // <Router> is the parent component of all the components that we want to be routed by react-router-dom library
        <div>
            <h1>React Router</h1>
            <Router>
                {/* <Link> is the component that will be used to create links to the different paths of the application */}
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                    <hr />
                    {/* <Routes> is the component that will render the component that matches the path of the URL */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contacts" element={<Contacts />}>
                            <Route path="user/:id" element={<User />} />
                            <Route path="*" element={<Error404 />} />
                        </Route>
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;