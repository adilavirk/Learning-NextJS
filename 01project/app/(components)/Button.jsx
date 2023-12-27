import React from 'react'

const Button = ({ title, type }) => {
    return (
        <button href="#" className="hero_btn btn" type={type}>
            {title}
        </button>

    )
}
export default Button