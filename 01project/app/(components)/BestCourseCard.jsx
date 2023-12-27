import Image from 'next/image'
import React from 'react'

const BestCourseCard = ({ heading, imageSource }) => {
    return (
        <div class="facilities-col">
            <Image src={imageSource} alt="best course Image" height={20} width={10} />
            <h3>{heading}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
            </p>
        </div>
    )
}

export default BestCourseCard