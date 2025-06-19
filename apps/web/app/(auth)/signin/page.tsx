"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {Form,FormControl,FormField,FormItem,FormMessage,} from "@workspace/ui/components/form"
import { Input } from "@workspace/ui/components/input"
import { Button } from "@workspace/ui/components/button"
import { SignInSchema } from "@workspace/common/types"
import Link from "next/link"
import { FaGithub, FaGoogle } from "react-icons/fa"
import { signIn, signOut, useSession } from "next-auth/react";

const page = () => {
  const SignInform = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })
  function onSubmit(values: z.infer<typeof SignInSchema>) {
    console.log(values)
    SignInform.reset()
  }
  return (
    <div className="flex flex-col justify-center h-full p-10">
      <h1 className="text-4xl font-semibold">Login to Your Account</h1>
      <p className="text-ring mb-5 mt-1 text-sm">User login page to access account using username and password.</p>
      <Form {...SignInform}>
        <form onSubmit={SignInform.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={SignInform.control}
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
            control={SignInform.control}
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
          <Link href={"/signup"} className="text-muted-foreground underline block text-md text-end">Already have an account? Log in</Link>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </Form>
      <h1 className="flex justify-center items-center mt-2 text-muted-foreground"><span className="w-30 h-0.5 bg-muted-foreground block mr-2"></span>Or Register With <span className="w-30 h-0.5 bg-muted-foreground block ml-2"></span></h1>
      <div className="mt-3 flex justify-center">
        <Button variant="secondary" className=" px-10 py-5 mr-2.5" onClick={() => signIn("google")}><FaGoogle />Log in With Google</Button>
        <Button variant="secondary" className=" px-10 py-5 ml-2.5" onClick={() => signIn("github")}><FaGithub />Log in With Github</Button></div>
    </div>
  )
}

export default page