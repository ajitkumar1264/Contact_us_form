import React,{useState} from 'react';
import {auth} from '../config';
import {useNavigate} from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {

const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const nav=useNavigate();



const verify=()=>{

    createUserWithEmailAndPassword(auth,email,password).then(()=>{}).catch(err=>console.log(err.message));
    toast.success("Succesful SignIn 👍");
    setTimeout(() => {
      nav('/home')
    },2000);
    
   
}

  return (
    <>
    <div className='mt-20'>
<h1 className='text-5xl font-semibold mt-10'>Sign in with Email</h1>
<h2 className='text-3xl mt-10 font-medium'>Email</h2>
<input type="text" placeholder='enter Email'  className='box mt-5 bg-gray-200 px-2 py-1 w-96 border-4 border-gray-800 rounded-lg' onChange={(e)=>setemail(e.target.value)} value={email} />
<h3 className='text-3xl mt-10 font-medium'>Password</h3>
<input type="text" placeholder='enter Password'  className='box bg-gray-200 mt-5 px-2 py-1 w-96 border-4 border-gray-800 rounded-lg' onChange={(e)=>setpassword(e.target.value)} value={password} /><br />
<div className='mt-5'>
<button onClick={verify} className='box px-7 py-2 bg-blue-400 transition ease-out duration-500 rounded-lg hover:bg-blue-500 font-semibold text-xl mt-5 hover:ring-2 ring-black'>submit</button>
<h1 className='text-3xl mt-10 font-medium' > confirm your email - {email}</h1>
</div>

</div>

<ToastContainer
position="top-center"
theme='colored' />

    </>
  )
}

export default Signin