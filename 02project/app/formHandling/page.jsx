"use client"
import React, { useState } from 'react'

const FormHandling = () => {
    const [userName, setUserName] = useState("")

    // instead of creating multiple states for name,email and password.the best way is this:
    const [state, setState] = useState({
        userName: "",
        email: "",
        phone: 0
    })
    // const onChangeHandler = (e) => {
    //     setUserName(e.target.value);
    // }
    // best method
    const onChangeHandler = (e) => {
        setState({
            //  how to make "key" dynamic
            [e.target.name]: e.target.value
        });
    }
    return (
        <div className='flex flex-col justify-center items-center mt-44'>
            <h1 className='text-4xl'>Form Handling in NextJS</h1>
            {/* 
            <input type="text" placeholder='enter your name' onChange={onChangeHandler} className='mt-16 p-2 mx-4' /> */}

            {/* 2nd method */}

            <input type="text" placeholder='enter your name' name='userName' onChange={onChangeHandler} className='mt-16 p-2 mx-4' />
            <label htmlFor="userName">User Name is:{state.userName}</label>
            <input type="email" placeholder='enter your email' name='email' onChange={onChangeHandler} className='mt-4 p-2 mx-4' />
            <label htmlFor="email">User Name is:{state.email}</label>
            <input type="number" placeholder='enter your phone number' name='phone' onChange={onChangeHandler} className='mt-4 p-2 mx-4' />
            <label htmlFor="phone">User Name is:{state.phone}</label>
        </div>

    )
}

export default FormHandling