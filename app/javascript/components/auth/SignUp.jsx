import React from 'react';
import {useState} from 'react'
import axios from 'axios'

function SignUp() {
  const[formData, setFormData]=useState(
    {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone: '',
      avatar: '',
      role: 'tourist'
    }
  )

  function handleInput(e) {
    const{name, value}=e.target
    setFormData((pre)=>({...pre, [name]: value}))
  }

  const handleSubmit=async (e)=>{
    console.log(formData)
    e.preventDefault()
    try {
      const response=await axios.post('/api/v1/users/signup', {
        user: formData
      })
      console.log('Signup Successful: ', response.data);
    }catch(error){
      console.error('signup error: ', error.response?.data || error.message)
    }
  }

  return (
    <>
      <div className='w-full mt-10 px-[30%]'>
        <form onSubmit={handleSubmit} className="border-2 border-black p-2 rounded flex flex-col gap-2">
          <h2 className='m-auto'>Sign Up</h2>

          {/* Name Input */}
          <div className="flex justify-between">
            <label htmlFor="name">Name:</label>
            <input
              className='border-1 border-black rounded'
              type="text"
              id="name"
              name="name"
              required
              autoFocus
              onChange={handleInput}
            />
          </div>

          {/* Email Input */}
          <div className="flex justify-between">
            <label htmlFor="email">Email:</label>
            <input
            className='border-1 border-black rounded'
              type="email"
              id="email"
              name="email"
              required
              onChange={handleInput}
            />
          </div>

          {/* Password Input */}
          <div className="flex justify-between">
            <label htmlFor="password">Password:</label>
            <input
            className='border-1 border-black rounded'
              type="password"
              id="password"
              name="password"
              required
              minLength="6"
              onChange={handleInput}
            />
          </div>

          {/* Password confirmation Input */}
          <div className="flex justify-between">
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input
            className='border-1 border-black rounded'
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              required
              minLength="6"
              onChange={handleInput}
            />
          </div>

          {/* Phone Number Input */}
          <div className="flex justify-between">
            <label htmlFor="phone_no">Phone Number:</label>
            <input
            className='border-1 border-black rounded'
              type="tel"
              id="phone"
              name="phone"
              onChange={handleInput}
            />
          </div>

          {/* Avatar Input (File) */}
          <div className="flex justify-between">
            <label htmlFor="avatar">Avatar:</label>
            <input
            className='border-1 border-black rounded w-63'
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg" 
              onChange={handleInput}
            />
          </div>

          {/* Role Input (Dropdown/Select) */}
          <div className="flex justify-between">
            <label htmlFor="role">Role:</label>
            <select id="role" name="role" onChange={handleInput} className='border-1 border-black w-63 rounded'>
              <option value="tourist" selected>Tourist</option>
              <option value="guide">Guide</option>
            </select>
          </div>

          <button className='bg-black text-white px-3 py-2 rounded w-50 m-auto' type="submit">Sign Up</button>
        </form>
      </div>
    </>
  )
}

export default SignUp
