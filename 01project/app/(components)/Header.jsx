import React from 'react'
import Navbar from './Navbar'

const Header = ({ title }) => {
    return (
        <section className="Sub-header">
            <Navbar />
            <h1>{title}</h1>
        </section>
    )
}

export default Header