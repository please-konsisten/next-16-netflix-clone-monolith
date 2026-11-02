"use client"
import { Input } from "@/components/Input";
import React, { useCallback, useState } from "react";

export default function Page (){
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')


  const [variant, setVariant] = useState("login")

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === "login" ? "register": "login")
  },[])

  return(
    <>
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black lg:bg-black/50 w-full h-full">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12"/>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black lg:bg-black/70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:w-max-md rounded-md w-full">
            <h2 className="text-4xl mb-8 font-semibold">
              {variant === "login"? "Sign in": "Create an account"}
            </h2>
            <div className="flex flex-col gap-4">
              { variant === "register" && (
                <Input
                  id="username"
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setUsername(ev.target.value)}
                  value={username}
                  label="Username"
                />
              )}
              <Input
                id="email"
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setEmail(ev.target.value)}
                value={email}
                type="email"
                label="Email"
              />
              <Input
                id="password"
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setPassword(ev.target.value)}
                value={password}
                type="password"
                label="Password"
              />
              <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                {variant === "login"? "Login" : "Sign up"}
              </button>
              <p className="text-neutral-500 mt-12">
                { variant === "login"? "First time using Netflix? ": "Already have an account? "}
                <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                  { variant === "login"? "Create an account" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}