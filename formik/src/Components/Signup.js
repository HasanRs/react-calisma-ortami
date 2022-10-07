import {Formik, Field, Form, ErrorMessage} from "formik";
import validationSchema from "./validations";

function Signup() {
    return (
        <div className="App">
            <div>
                <h1>Sign Up</h1>
                <Formik
                    // initialValues is an object that contains the initial values for the form
                    initialValues={{
                        email: '',
                        password: '',
                        passwordConfirmation: '',
                    }}
                    // validationSchema is a function that returns an object that contains the validation rules for the form
                    validationSchema={validationSchema}
                    // onSubmit is a function that is called when the form is submitted
                    onSubmit={(values, {setSubmitting}) => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        console.log(JSON.stringify(values, null, 2));
                    }}>
                    {({
                        // isSubmitting is a boolean that is true when the form is submitting and false when the form is not submitting
                          isSubmitting, values}) => (
                        <Form>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field className="form" type="email" name="email" />
                                <ErrorMessage name="email" component="div" /><br/>
                                <label htmlFor="password">Password</label>
                                <Field className="form" type="password" name="password" />
                                <ErrorMessage name="password" component="div" /><br/>
                                <label htmlFor="passwordConfirmation">Confirm Password</label>
                                <Field className="form" type="password" name="passwordConfirmation" />
                                <ErrorMessage name="passwordConfirmation" component="div" /><br/>
                            </div>
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

export default Signup;
