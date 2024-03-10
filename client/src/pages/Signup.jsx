import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [formdata, setformdata] = useState({});
  const[errorMessage, setErrorMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (e) =>{
      setformdata({...formdata, [e.target.id]: e.target.value.trim()});
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!formdata.username || !formdata.email || !formdata.password){
      return setErrorMessage('Please fill out all forms');
    }
    try {
      setLoading(true); 
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if(data.success === false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

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
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className="">
            <Label value='Your username'/>
            <TextInput
            type='text'
            placeholder='Raj Singh'
            id='username' onChange={handleChange}/>
          </div>
          <div className="">
            <Label value='Your email'/>
            <TextInput
            type='email'
            placeholder='name@company.com'
            id='email' onChange={handleChange}/>
          </div>
          <div className="">
            <Label value='Your password'/>
            <TextInput
            type='password'
            placeholder='Password'
            id='password' onChange={handleChange} />
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading} >{
            loading ? (
              <>
              <Spinner size='sm'/>
              <span className='pl-3'>Loading...</span>
              </> 
              ) : 'Sign Up'
          }</Button>
        </form>
        <div className=' flex gap-2 mt-4 text-sm'>
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-600'>Sign In</Link>
        </div>
        {/* {errorMessage && (
            <Alert className='mt-5' color='failure'>
            {errorMessage}
            </Alert>)
            } */}
      </div>
      </div>
    </div>
)
}
