"use client"
import Image from 'next/image'
import KeyBoardComponent from './KeyBoardComponent'
import { useEffect } from 'react';

export default function Home() {
   
  useEffect(()=>{
    console.log(typeof window)
  },[])


  return  (
    <div className='text-black overflow-x-hidden h-screen w-screen bg-neutral-800 '>

      <div  className='flex justify-center pt-5 pb-5'>
      <h1 className='text-white text-xl font-bold'>Write Your Story</h1>
      <button >Helloooo</button>
      </div>

      <div className='text-box w-full  flex gap-5 ' >
        <div className='w-full flex p-3 outline-none  border-none focus:outline-none  justify-center'>
          <input  placeholder='Title' className=' bg-neutral-600 text-white placeholder:text-white  w-4/5 pl-5 h-14  rounded-xl ' /> 
        </div>
        <script dangerouslySetInnerHTML={{
          __html: `
          // Custom JavaScript code
          CreateCustomHindiTextArea("id 1","नमस्कार संसार",90,16,true);
          `
        }} />
      </div>

    </div>
    ) 
}
