"use client"
import { password } from 'bun'
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"


//  FORM SCHEMA
const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }).max(20),
})

//^ COMPONENT :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function FormComponent() {
    // USE FORM
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { username: "", password: "" },
    })

    // ON SUBMIT
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.info(values)
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-1/5 p-4 border mx-auto my-16 rounded-lg bg-black/10 backdrop-blur-xl h-64 ">
                <FormField control={form.control} name="username" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="Username" {...field} className='bg-zinc-900 text-white px-2' />
                        </FormControl>
                        <FormMessage />
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="Password" {...field} className='bg-zinc-900 text-white px-2' />
                        </FormControl>
                        <FormDescription>
                            This is your public display name.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" className='w-full bg-emerald-800 hover:bg-emerald-950 duration-300 rounded font-bold text-white'>Submit</Button>
            </form>
        </Form>
    )


}

export default FormComponent
