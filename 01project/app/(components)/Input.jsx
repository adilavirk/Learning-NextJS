import React from 'react'

const Input = ({ type, placeholder }) => {
    return (
        <input type={type} placeholder={placeholder} required />
    )
}

export default Input