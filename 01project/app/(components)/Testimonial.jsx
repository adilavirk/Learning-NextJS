import React from 'react'

const Testimonial = ({ source, studentName }) => {
    return (
        <div className="testimonials-col">
            <img src={source} alt="oo.." />
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                    maiores in nostrum rerum voluptatem praesentium veritatis alias
                    omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                    deserunt. In quia repellat maxime.
                </p>
                <h3>{studentName}</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </div>
        </div>
    )
}

export default Testimonial