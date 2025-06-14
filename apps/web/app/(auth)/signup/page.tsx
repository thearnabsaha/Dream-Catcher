"use client"

import { z } from "zod"
import { Button } from "@workspace/ui/components/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@workspace/ui/components/form"
import { Input } from "@workspace/ui/components/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { SignUpSchema } from "@workspace/common/types"
const Signup = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      email: ""
    },
  })

  function onSubmit(values: z.infer<typeof SignUpSchema>) {
    console.log(values)
  }
  return (
    <div className="flex flex-col justify-center h-full p-10">
      <h1 className="text-4xl font-semibold">Create an account</h1>
      <p className="text-ring mt-1 mb-5 text-sm">User registration page to create account with email and password.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Firstname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem className="w-full ml-2">
                  <FormControl>
                    <Input placeholder="Lastname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link href={"/signin"} className="text-muted-foreground ease-in-out underline block text-md text-end">Already have an account? Log in</Link>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </Form>
      <h1 className="flex justify-center items-center mt-2 text-muted-foreground"><span className="w-30 h-0.5 bg-muted-foreground block mr-2"></span>Or Register With <span className="w-30 h-0.5 bg-muted-foreground block ml-2"></span></h1>
      
    </div>
  )
}

export default Signup