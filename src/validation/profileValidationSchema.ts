import * as yup from 'yup';

const profileValidationSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(3, 'Name must be alt least 3 characters'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required').min(5, 'Password must be at least 5 characters'),
    confirmPassword: yup.string().required('Confirm Password is required').oneOf([yup.ref('password')],'Password must match')
})

export default profileValidationSchema;