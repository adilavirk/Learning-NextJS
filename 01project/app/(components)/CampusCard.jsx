import React from 'react'

const CampusCard = ({ heading, source }) => {
    return (
        <div className="campus-col">
            <img src={source} alt="Campus Image" />
            <div className="layer">
                <h3>{heading}</h3>
            </div>
        </div>
    )
}

export default CampusCard