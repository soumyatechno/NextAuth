"use client" 

import Link from "next/link"
import React,{useState,useEffect} from "react"
import { useRouter } from "next/router"
// import { axios } from "axios"


const Signup = () => {
  const [user, setUser] = useState({
    email:"",
    password:"",
    username:""
  });

  const handleSignup = async() =>{
   
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white">
      <h1 className=" text-2xl">Signup</h1>
      <hr/>
      <label htmlFor="username">username</label>
      <input
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-noe focus:border-gray-600"
      id="username"
      type="text"
      value={user.username}
      onChange={(e)=> setUser({...user,username: e.target.value})}
      placeholder="username"
      />
      <hr/>
      <label htmlFor="email">email</label>
      <input
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-noe focus:border-gray-600"
      id="email"
      type="text"
      value={user.email}
      onChange={(e)=> setUser({...user,email: e.target.value})}
      placeholder="email"
      />
      <hr/>
      <label htmlFor="password">password</label>
      <input
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-noe focus:border-gray-600"
      id="password"
      type="password"
      value={user.password}
      onChange={(e)=> setUser({...user,password: e.target.value})}
      placeholder="password"
      />
      <button 
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-noe focus:border-gray-600 text-2xl"
      onClick={handleSignup}>Signup</button>
      <Link href="/login">View to Login</Link>
      
    </div>
  )
}

export default Signup