import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchemaYup } from '../validation/loginSchemaYup';
import FormInput from '../components/FormInput';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(loginSchemaYup),
    mode: 'onBlur'
  });

  const onSubmit = async (data) => {
    try {
      // Submit to backend here (e.g. axios.post('/api/login', data))
      console.log('Logging in:', data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf6f0] px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormInput
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email}
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            register={register}
            error={errors.password}
          />

          <Button type="submit" disabled={isSubmitting} className="w-full mt-4 bg-[#527853] text-white rounded-lg text">
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
