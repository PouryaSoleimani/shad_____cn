import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from '../ui/button'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Toaster, toast } from 'sonner'

type Inputs = { username: string, password: string }
const schema = yup.object({ username: yup.string().required(), password: yup.string().required(), }).required()


// COMPONENT =================================================================================================================================================================
function FormComponent() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ resolver: yupResolver(schema), })

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.info(data);
        reset();
        toast.message('Welcome Back !', {
            description: 'Monday, January 3rd at 6:00pm',
        })
    }

    return (
        <>
            <Toaster position="top-right" expand={true} />
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='w-fit border flex flex-col items-stretch justify-start p-6 rounded mx-auto my-16 gap-y-1 shadow-lg shadow-white/10 min-h-[22rem]'>
                    <h2 className='w-full text-center bg-blue-950 py-5 rounded font-black'>SIGN IN</h2>
                    <label htmlFor="username">Username</label>
                    <input id='username' className='bg-zinc-900 px-4 py-2 rounded w-64 outline-0 text-white font-semibold' {...register("username")} />
                    {errors.username && <span className='text-red-900 text-sm font-semibold pl-1 m-0 p-0 tracking-tighter'>Username is required</span>}
                    <label htmlFor="password">Password</label>
                    <input type='password' className='bg-zinc-900 px-4 py-2 rounded w-64 outline-0 text-white font-semibold' {...register("password")} />
                    {errors.password && <span className='text-red-900 text-sm font-semibold pl-1 m-0 p-0 tracking-tighter'>Password is required</span>}
                    <Button className='bg-green-950 hover:bg-green-800 py-6 text-white font-bold rounded border-none mt-10'>Submit</Button>
                </form>
            </div>
        </>
    )
}

export default FormComponent
