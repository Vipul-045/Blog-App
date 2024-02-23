import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      <div className='flex-1'>
      <Link
        to="/"
        className="dark:color-white font-bold text-4xl"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-red-700 via-pink-500 to-violet-600 rounded-xl text-white">
          Vipul's
        </span>
        Blog
      </Link>
      <p className='text-sm mt-5'>This is a demo project. You can sign up with your email and password or with Google.</p>
      </div>
      <div className=' flex-1'>
        <form className='flex flex-col gap-4'>
          <div className="">
            <Label value='Your username'/>
            <TextInput
            type='text'
            placeholder='Raj Singh'
            id='username'/>
          </div>
          <div className="">
            <Label value='Your email'/>
            <TextInput
            type='text'
            placeholder='name@company.com'
            id='email'/>
          </div>
          <div className="">
            <Label value='Your password'/>
            <TextInput
            type='text'
            placeholder='Password'
            id='password'/>
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit'>Sign up</Button>
        </form>
        <div className=' flex gap-2 mt-4 text-sm'>
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-600'>Sign In</Link>
        </div>
      </div>
      </div>
    </div>
  )
}
