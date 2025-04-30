import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email(),
  age: z.number().min(18, 'Must be 18 or older'),
});

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => alert(JSON.stringify(data, null, 2));

  return (
    <div className="min-h-screen bg-[#d7b899] flex items-center justify-center p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-4 p-6 bg-[#a0522d] text-white rounded-xl shadow-md">
        <div>
          <input {...register('name')} placeholder="Name"
            className="w-full p-2 rounded bg-[#f3e5ab] text-[#5a2e0c] border" />
          {errors.name && <p className="text-sm text-[#fff0e6]">{errors.name.message}</p>}
        </div>

        <div>
          <input {...register('email')} placeholder="Email"
            className="w-full p-2 rounded bg-[#f3e5ab] text-[#5a2e0c] border" />
          {errors.email && <p className="text-sm text-[#fff0e6]">{errors.email.message}</p>}
        </div>

        <div>
          <input type="number" {...register('age', { valueAsNumber: true })} placeholder="Age"
            className="w-full p-2 rounded bg-[#f3e5ab] text-[#5a2e0c] border" />
          {errors.age && <p className="text-sm text-[#fff0e6]">{errors.age.message}</p>}
        </div>

        <button type="submit" className="w-full p-2 bg-[#5a2e0c] hover:bg-[#3d1e0a] rounded text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
