import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchemaYup } from '../validation/registerSchemaYup';
import FormInput from '../components/FormInput';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(registerSchemaYup), 
    mode: 'onBlur'
  });

  const onSubmit = async (data) => {
    try {
      // Submit to backend here (e.g. axios.post('/api/register', data))
      console.log('Registering:', data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf6f0] px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormInput
            label="Name"
            name="name"
            register={register}
            error={errors.name}
          />
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
            {isSubmitting ? 'Registering...' : 'Register'}
          </Button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

