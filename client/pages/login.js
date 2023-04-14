import { Inter } from '@next/font/google'
import Navbar from '../src/Navbar'
import { ReactNebula, smallSolarSystem, bigSolarSystem } from "@flodlc/nebula";
import EarthCanvas from '../src/Earth';
import ComputersCanvas from '../src/Computers';
import { useState } from "react";
import axios from "axios";
import Router, { useRouter } from 'next/router';


const inter = Inter({ subsets: ['latin'] })

export default function login() {
  const router=useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/user/login", {
        email,
        password,
      });
      console.log(response.data);
      const { token, user } = response.data;
      localStorage.setItem('sessionToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/courses')
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section>
      <div className='h-[100vh] flex items-center'>
      <ReactNebula className="nebula" config={{astres: smallSolarSystem}}/>
      <div className='w-1/2 h-[30rem]'><ComputersCanvas/></div>
      <div className='w-1/2 h-[10rem] stu flex items-center'>
        <div className='h-[30rem] w-[29rem] rounded-3xl bg-white stu flex mx-auto p-6 flex-col'>
<h1 className='text-2xl font-semibold'>Login</h1>
<div className='mt-5 flex flex-col'>

<form onSubmit={handleLogin}>
                                    <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} type={'email'} placeholder='email' className="py-2 my-3 px-5 ml-2 rounded-md bg-gray-200 text-gray-700 flex-grow mr-4" />
                                    <input name="password" onChange={(e) => setPassword(e.target.value)} value={password} type={'password'} placeholder='password' className="py-2 my-3 px-5 ml-2 rounded-md bg-gray-200 text-gray-700 flex-grow mr-4" />
                                    <button type={"submit"} className=' mt-7 started text-white py-3 px-5 text-md rounded-2xl bg-red-500' >Sign Up</button>
                                </form>
</div>


        </div>
      </div>
      

        
      </div>
      
        
      
    </section>

  )
}
