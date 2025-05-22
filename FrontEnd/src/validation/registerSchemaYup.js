import * as yup from 'yup';

export const registerSchemaYup = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email must be valid').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});
