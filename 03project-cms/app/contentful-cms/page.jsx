import client from '@/lib/contentfulClient'
import React from 'react'


const fetchServices = async () => {
    let response = await client.getEntries({ content_type: "services" })
    // console.log(response)

    const services = response.items.map((item) => (

        {
            title: item.fields.title,
            description: item.fields.description,
            image: item.fields.image.fields.file.url
        }
    ))
    return services;
}

const ContentFul = async () => {
    const services = await fetchServices()
    console.log(services)

    return (
        <>
            <h1>Our Services</h1>

            {services.map((item) => {
                return (
                    <>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <img src={item.image} alt={`${item.title}'s image`} width={100} />
                    </>

                )
            })}

        </>
    )
}

export default ContentFul