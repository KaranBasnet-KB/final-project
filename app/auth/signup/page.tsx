"use client"

import Link from "next/link";
import { useEffect } from "react";

const signup = () => {

  const getFetchData = async() => {
    const response = await fetch('/api/register', {method: "POST", body: JSON.stringify(values)})
    const data = await response.json();
    console.log(data)
  }

  useEffect(() => {
    getFetchData()
  }, [])

  return (
    <>
      <div className="grid gap-4  grid-cols-12">
        <div className="col-span-12">
          <div className="flex flex-col justify-center items-center h-lvh">
            <div className="m-4 shadow-2xl rounded-md w-100 text-white bg-gray-700 p-4">
              <div className="flex  items-center gap-2 ">
                <div className="border rounded bg-amber-50  text-black mr-4">
                  <img className="h-15 w-15 m" src="/logo.png" />
                </div>
                <div className="mb-4 text-center  w-full text-3xl my-1  ">
                  <h1>Sign In To InstaScan</h1>
                </div>
              </div>
              <div className="flex  justify-center text-gray-400 ml-6">
                Fill the details to Sign In
              </div>
              <form>
                <div className="my-2">Email</div>
                <div className="flex justify-center">
                  <input
                    className="border w-full rounded px-3 py-1 placeholder : italic"
                    placeholder="Enter your Email eg: example@gmail.com"
                  />
                </div>
                <div className="my-2">Password</div>
                <div className=" flex justify-center">
                  <input
                    className="border w-full rounded px-3 py-1  placeholder : italic"
                    placeholder="Enter your Password eg: example##12"
                  />
                </div>
                <div>
                  <button className="border rounded my-8  w-full p-2 bg-blue-800  cursor-pointer mb-1 mt-10">
                    sign in
                  
                  </button>
                </div>
                <div className=" flex justify-center my-4 text-lg  ">  
                  New Here ?
                  <div className="ml-2 hover:text-blue-500 hover:text-xl ">
                    <Link href="/auth/login">
                    <button className="hover:underline cursor-pointer">
                      Login
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
export default signup;
