import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FormInput = ({ label, type = "text", name, register, error }) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name} className="block mb-1 font-semibold">
        {label}
      </Label>
      <Input
        id={name}
        type={type}
        {...register(name)}
        className={`w-full ${error ? 'border-red-500' : ''}`}
      />
      {error && (
        <p className="text-sm text-red-600 mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default FormInput;
