"use client"
import { Registration } from '@/lib/auth.validator'
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { z} from 'zod'
import Link from "next/link"


type LoginPayload = z.infer<typeof Registration>

const Login = () => {
  
 
  const { register, handleSubmit, formState: {errors, isSubmitting}} = useForm(
    {
      resolver: zodResolver(Registration), defaultValues: {
       email:"",
       password:""
      }
    }
  )
  const onsubmit =(values: LoginPayload) =>{
    console.log (values)
  }

  return (
    <>
      <div className="grid gap-4  grid-cols-12">
        <div className="col-span-12 ">
          <div className="flex justify-center items-center h-lvh ">
            <div className="m-4 shadow-2xl rounded-md w-100 text-white bg-gray-700 p-4">
              <div className="flex  items-center gap-2 ">
                <div className="border rounded bg-amber-50  text-black mr-4">
                  <img className="h-16 w-16 m" src="/logo.png" />
                </div>
                <div className="mb-4 text-center  text-2xl">
                  <h1>WELCOME TO InstaScan</h1>
                </div>
              </div>
              <div className="flex my-1 justify-center text-gray-400 ml-6">
                Fill the details to login
              </div>
              <form onSubmit={handleSubmit(onsubmit)}>
                <div className="my-2">Email</div>
                <div>
                  <input {...register("email")}
                    className="border w-full rounded px-3 py-1 placeholder : italic"
                    placeholder="Enter your Email eg: example@gmail.com"
                  />
                  <div className='mt-3 text-red-300'>
                    {errors?.email?.message}
                  </div>
                </div>

                <div className="my-2">Password</div>
                <div >
                  <input {...register("password")}
                    className="border w-full rounded px-3 py-1  placeholder : italic"
                    placeholder="Enter your Password eg: example##12"
                  />
                  <div className='mt-4 text-red-300'>
                    {errors?.password?.message}
                  </div>
                </div>
                <div>
                  <Link href='\dashboard\baseline'>
                  <button type = "submit" className="border rounded my-8  w-full p-2 cursor-pointer bg-blue-800 mb-2">
                    Login
                    <span className="p-2">▶</span>
                  </button>
                  </Link>
                </div>
                <div className=" flex justify-center  my-4 text-lg ">
                  Already have an account?
                  <div className=" ml-2 hover:text-blue-500 hover:text-xl">
                    <Link href="/auth/signup">
                    <button className="hover:underline cursor-pointer  ">
                      Signup
                    </button>
                   </Link>
                  
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
