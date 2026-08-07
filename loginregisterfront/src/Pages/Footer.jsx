import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-purple-700 text-white flex flex-col justify-center items-center'>
      <div className='pr-4'>
      <h1 className='mt-8 text-3xl'>Login|Register</h1>
      </div>
      <div className=" my-4 footer-copyright text-white">
       <hr className=''/>
       <p>Copyright @2025 - All Right Reserved.</p>
      </div>
      <div className='w-full text-white'>
        <hr/>
      </div>
      <div className='flex flex-col justify-between items-center my-2 w-full text-white'>
        <p>Created by - Manuel Nieto Software Developer </p>
      </div>
    </div>
  )
}
