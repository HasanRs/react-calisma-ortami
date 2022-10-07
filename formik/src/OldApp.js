import './App.css';
import {Formik, Field, Form, ErrorMessage} from "formik";

function App() {
  return (
    <div className="App">
        <div>
            <h1>Any place in your app!</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    gender: 'Male',
                    hobbies: [],
                    country: '',
                }}
                validate={values => {
                    const errors = {};
                    // email requirements
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    // password requirements
                    if (!values.password) {
                        errors.password = 'Required';
                    } else if (values.password.length < 8) {
                        errors.password = 'Password must be at least 8 characters';
                    } else if (!/[A-Z]/.test(values.password)) {
                        errors.password = 'Password must contain at least one uppercase letter';
                    } else if (!/[a-z]/.test(values.password)) {
                        errors.password = 'Password must contain at least one lowercase letter';
                    } else if (!/[0-9]/.test(values.password)) {
                        errors.password = 'Password must contain at least one number';
                    } else if (!/[!@#$%^&*]/.test(values.password)) {
                        errors.password = 'Password must contain at least one special character';
                    } else if (/\s/.test(values.password)) {
                        errors.password = 'Password must not contain any spaces';
                    }
                    // hobbies requirements
                    if (values.hobbies) {
                        if (values.hobbies.length < 2) {
                            errors.hobbies = 'Please select at least 2 hobbies';
                        }
                    }
                    // country requirements & messages
                    if (!values.country) {
                        errors.country = 'Required';
                    } else if (values.country === 'Select') {
                        errors.country = 'Please select a country';
                    } else if (values.country === 'India'
                        && values.hobbies
                        && values.hobbies.includes('Cricket')) {
                        errors.country = 'Cricket is not a popular sport in India';
                    } else if (values.country === 'USA'
                        && values.hobbies
                        && values.hobbies.includes('Football')) {
                        errors.country = 'Football is not a popular sport in USA';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}>
                {({isSubmitting, values}) => (
                    <Form>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field className="form" type="email" name="email" />
                            <ErrorMessage name="email" component="div" /><br/>
                            <label htmlFor="password">Password</label>
                            <Field className="form" type="password" name="password" />
                            <ErrorMessage name="password" component="div" /><br/>
                        </div>
                        <div>
                            <label>
                                <Field type="radio" name="gender" value="Male" />
                                Male
                            </label>
                            <label>
                                <Field type="radio" name="gender" value="Female" />
                                Female
                            </label>
                            <br/>
                        </div>
                        <div>
                            <label>Choose your hobbies</label>
                            <label>
                                <li><Field type="checkbox" name="hobbies" value="Cricket" />Cricket</li>
                            </label>
                            <label>
                                <li><Field type="checkbox" name="hobbies" value="Football" />Football</li>
                            </label>
                            <label>
                                <li><Field type="checkbox" name="hobbies" value="Hockey" />Hockey</li>
                            </label>
                            <ErrorMessage name={"hobbies"} component="div" /><br/>
                        </div>
                        <div>
                            <label>Choose your country</label>
                            <Field as="select" name="country">
                                <option value={null}>Select</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                            </Field>
                            <ErrorMessage name="country" component="div" /><br/>
                        </div>
                        <br/>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        <br/>
                        {JSON.stringify(values)}
                    </Form>
                )}
                </Formik>
        </div>
    </div>
    );
}

export default App;
