"use client"
import { Input } from "@/components/Input";
import React, { useState } from "react";

export default function Page (){
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return(
    <>
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black/50 w-full h-full">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12"/>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black/70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:w-max-md rounded-md w-full">
            <h2 className="text-4xl mb-8 font-semibold">
              Sign in
            </h2>
            <div className="flex flex-col gap-4">
              <Input
                id="name"
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setName(ev.target.value)}
                value=""
                label="Name"
              />
              <Input
                id="email"
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setEmail(ev.target.value)}
                value=""
                type="email"
                label="Email"
              />
              <Input
                id="password"
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setPassword(ev.target.value)}
                value=""
                type="password"
                label="Password"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}