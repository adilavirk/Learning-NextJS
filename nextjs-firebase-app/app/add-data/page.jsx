"use client"
import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/config/firebase';

const FormHandling = () => {



    const [state, setState] = useState({
        name: "",
        email: "",
        course: ""

    })


    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    }
    const handleSubmit = async () => {
        let student = {
            name: state.name,
            email: state.email,
            course: state.course,
        }
        try {
            console.log("i am try catch")
            const collectionName = collection(db, "users");
            await addDoc(collectionName, student);
            console.log("Document written with ID: ");


            setState({
                name: '',
                email: '',
                course: '',
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
    return (
        <div className='flex flex-col justify-center items-center mt-44'>
            <h1 className='text-4xl'>Form Handling in NextJS</h1>


            {/* 2nd method */}

            <label htmlFor="name">Name:</label>
            <input type="text" placeholder='enter your name' name='name' value={state.name} onChange={onChangeHandler} className='mt-4 p-2 mx-4 text-black' />
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder='enter your email' name='email' value={state.email} onChange={onChangeHandler} className='mt-4 p-2 mx-4 text-black' />
            <label htmlFor="course">Course:</label>
            <input type="text" placeholder='enter your course' name='course' value={state.course} onChange={onChangeHandler} className='mt-4 p-2 mx-4 text-black ' />
            <br />

            <button className="m-2 p-3 bg-green-500" onClick={handleSubmit}>Submit</button>

        </div>

    )
}

export default FormHandling