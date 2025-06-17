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
import axios from 'axios'
import { BACKEND_URL } from "@/lib/config"
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const Signup = () => {
  const Signupform = useForm<z.infer<typeof SignUpSchema>>({
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
    // console.log(values)
    axios.post(`${BACKEND_URL}/signup`, {
      email: values.email,
      firstname: values.firstname,
      lastname: values.lastname,
      username: values.username,
      password: values.password
    })
      .then((e) => {
        console.log(e)
      })
      .catch((e) => {
        console.log(e)
      })
    Signupform.reset()
  }
  return (
    <div className="flex flex-col justify-center h-full p-10">
      <h1 className="text-4xl font-semibold">Create an account</h1>
      <p className="text-ring mt-1 mb-5 text-sm">User registration page to create account with email and password.</p>
      <Form {...Signupform}>
        <form onSubmit={Signupform.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex">
            <FormField
              control={Signupform.control}
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
              control={Signupform.control}
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
            control={Signupform.control}
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
            control={Signupform.control}
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
            control={Signupform.control}
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
      <div className="mt-3 flex justify-center">
        <Button variant="secondary" className=" px-10 py-5 mr-2.5"><FaGoogle />Log in With Google</Button>
        <Button variant="secondary" className=" px-10 py-5 ml-2.5"><FaGithub />Log in With Github</Button>
      </div>
    </div>
  )
}

export default Signup