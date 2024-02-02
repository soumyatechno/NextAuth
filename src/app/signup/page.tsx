"use client" 

import Link from "next/link"
import React,{useState,useEffect} from "react"
import { useRouter } from "next/router"
import  axios  from "axios"
import toast,{ Toast, Toaster } from "react-hot-toast"


const Signup = () => {
  const [user, setUser] = useState({
    email:"",
    password:"",
    username:""
  });

  const [button, setButton] = useState(false);
  const router = useRouter();

  useEffect  (()=>{
    if(user.email.length>0 && user.password.length>0 && user.username.length > 0){
      setButton(false);
    }
    else{
      setButton(true)
    }

  },[user]);

  const handleSignup = async() =>{
    try{
      const response = await axios.post("./api/users/signup",user);
      console.log("Signup success", response.data);
      router.push('/');

    } catch(error:any){
      console.log("Signup failed", error.message);
      toast(error.message);
    }
   
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white">
      <h1 className=" text-2xl">Signup</h1>
      <hr/>
      <label htmlFor="username">username</label>
      <input
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-noe focus:border-gray-600 text-black"
      id="username"
      type="text"
      value={user.username}
      onChange={(e)=> setUser({...user,username: e.target.value})}
      placeholder="username"
      />
      <hr/>
      <label htmlFor="email">email</label>
      <input
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-noe focus:border-gray-600 text-black"
      id="email"
      type="text"
      value={user.email}
      onChange={(e)=> setUser({...user,email: e.target.value})}
      placeholder="email"
      />
      <hr/>
      <label htmlFor="password">password</label>
      <input
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-noe focus:border-gray-600 text-black"
      id="password"
      type="password"
      value={user.password}
      onChange={(e)=> setUser({...user,password: e.target.value})}
      placeholder="password"
      />
      <button 
      className="px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-noe focus:border-gray-600 text-xl"
      onClick={handleSignup}
      // disabled={button}
      >{button ? "No signup" : "Signup"}</button>
      <Toaster/>
      <Link href="/login">View to Login</Link>
      
    </div>
  )
}

export default Signup