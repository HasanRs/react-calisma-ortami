import * as yup from 'yup';

// validation schema for formik form in Signup.js component
const validations = yup.object().shape({
    // email must be a valid email and required
    email: yup.string().email().required( 'Email is required' ),
    // password must be at least 8 characters long and contain at least one number and one letter and one special character and no spaces and required
    password: yup.string()
        .min(8)
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*]/, 'Password must contain at least one special character')
        .matches(/^[^\s]*$/, 'Password must not contain any spaces')
        .required( 'Password is required' ),
    // passwordConfirmation must be the same as password and required
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required(),
});

export default validations;