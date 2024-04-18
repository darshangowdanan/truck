// Import your Firebase auth
// import { createUserWithEmailAndPassword } from 'firebase/auth';
"use client"
import React, { useState } from 'react';
import { auth } from '../../../firebase/firebase'; // Import your Firebase auth
import { createUserWithEmailAndPassword } from 'firebase/auth';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Handle successful signup (e.g., redirect to dashboard)
      console.log('User signed up successfully:', userCredential);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-rgb-233-237-201 md:p-4">
      <div className="bg-white rounded-lg md:shadow-lg p-6 w-full max-w-md ">
        <div className="text-right">
          <button className="text-rgb-233-237-201 hover:text-rgb-233-237-201-600">&times;</button>
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <div className="text-center text-sm mb-4 font-semibold">
          Already have an account? <a href="/auth/login" className="text-blue-500 hover:underline">Log in</a>
        </div>
        <div className="flex justify-around mb-4">
          {/* Social login buttons can go here */}
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="text-center my-4">OR</div>
        <form className="signup space-y-4" onSubmit={handleSubmit}>
          <input id="email" name="email" type="email" placeholder="email" className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setEmail(e.target.value)} />
          <input id="password" name="password" type="password" placeholder="password" className="w-full px-4 py-2 border rounded-lg" onChange={(e) => setPassword(e.target.value)} />
          <input id="first_name" name="first_name" type="first_name" placeholder="first name" className="w-full px-4 py-2 border rounded-lg" />
          <input id="last_name" name="last_name" type="last_name" placeholder="last name" className="w-full px-4 py-2 border rounded-lg" />
          <input id="phone_number" name="phone_number" type="phone_number" placeholder="phone number" className="w-full px-4 py-2 border rounded-lg" />
          {/* Additional fields can go here */}
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg">Sign Up</button>
        </form>
        <div className="text-center text-sm my-4">
          By signing up you agree to our <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="updates" className="rounded text-green-500" />
          <label htmlFor="updates" className="text-sm">Email me with news and updates</label>
        </div>
      </div>
    </div>
  )
}
export default Signup;