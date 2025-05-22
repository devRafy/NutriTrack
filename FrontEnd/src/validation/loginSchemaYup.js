import * as yup from 'yup';

export const loginSchemaYup = yup.object().shape({
  email: yup
    .string()
    .email('Email must be valid')
    .required('Email is required'),
    
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
});
