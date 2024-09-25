import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from './TextField';
import { validationSchema } from './yupValidation'; 
//using react-hook form
const MyForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="Email"
                placeholder="Enter your email"
                type="email"
                {...register('email')}
                error={errors.email?.message}
                customSize="medium"
            />

            <TextField
                label="Password"
                placeholder="Enter your password"
                type="password"
                {...register('password')}
                error={errors.password?.message}
                customSize="medium"
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
//using formik
