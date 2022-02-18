import React from 'react'
import { useState } from 'react'
import './Signup.scss';
import Axios from 'axios';
function Signup() {
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [repeatPassword,setRepeatPassword] = useState('');
    const [error,setError]  = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(password != repeatPassword){
            setError('Passwords do not match');
        }
        else{
            Axios.post('localhost:4000/app/signup',
            {
                fullName:username,
                username:username,
                email : email,
                password : password,
            }
        ).then((response)=>{
            console.log(response);
        })
        .catch(err=>{
            console.log(err);
        });
        }
    }
  return (
    <div className='container'>
        <form className='form-signup'>
            <input type='email' name='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
            <input type='text' name='username' placeholder='Full Name' value={username} onChange={e=>setUsername(e.target.value)}/>
            <input id="password" type='password' placeholder='Password' name='password' value={password} onChange = {e=>setPassword(e.target.value)}/>
            <input type='password' placeholder='Enter Password' name='password' value={repeatPassword} onChange = {e=>setRepeatPassword(e.target.value)}/>
            <button type='submit' className='submit-btn' onClick={e=>handleSubmit(e)}>Register</button>
            {error && <p>{error}</p>}
        </form>
    </div>
  )
}

export default Signup