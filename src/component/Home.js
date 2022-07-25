import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {


    const form=useRef();
 

  const sendemail=(e)=>{
 e.preventDefault();

 emailjs.sendForm('service_0s35th8','template_0ojv89p',form.current,'uQBh02mdWYBAlLrRZ')
 .then((result)=>{
  console.log(result.txt)
 },(error)=>{
  console.log(error.txt);
 })
 toast.success("we recived your Message");


}


  return (
    <>
    <div >

    
  
    <div className=' flex justify-evenly  pl-40 pr-40 mt-10 items-center '>
    
    <div>
    <h1 className='text-xl font-semibold '> {localStorage.getItem("name")} </h1>
    </div>
    <div>
    <h1 className='text-xl font-semibold '>  {localStorage.getItem("email")} </h1>
    </div>
    <div>
    <img src={localStorage.getItem("photourl")} className='rounded-full w-10' alt="" />
    </div>
   
    
    </div>
    <form ref={form} className='mt-5'>
    <div className='text-5xl'>
<h1 className='font-semibold' >Contact us</h1>
</div>
<div className='mt-10 '>
<h2 className='text-2xl '>Name</h2>
</div>
<input type="text" placeholder='enter name' name='name' className='box bg-gray-200 mt-5 px-2 py-1 w-96 border-4 border-gray-800 rounded-lg'/>
<h3 className='text-2xl mt-5'>Email</h3>
<input type="text" placeholder='enter your email' name='email'  className='box bg-gray-200 mt-5 px-2 py-1 w-96 border-4 border-gray-800 rounded-lg' /><br />
<h3  className='text-2xl mt-5'>Message</h3>
<textarea type="text" rows={5}  placeholder='enter message' name='message'  className='box bg-gray-200 mt-5 px-2 py-1 w-96 border-4 border-gray-800 rounded-lg' /><br />
<button onClick={sendemail} type='submit' className='box px-7 py-2 bg-blue-400 transition ease-out duration-500 rounded-lg hover:bg-blue-500 font-semibold text-xl mt-5 hover:ring-2 ring-black' >send</button>
</form>
</div>

<ToastContainer
position="top-center"
theme='colored' />
    
    </>

  )
}

export default Home
