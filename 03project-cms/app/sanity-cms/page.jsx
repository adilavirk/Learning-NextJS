import { client } from '@/sanity/lib/client'
import React from 'react'
const fetchServices = async () => {


    let response = await client.fetch('*[_type == "services"]', {}, {

        cache: 'no-cache',

    })
    return response;
    console.log(response);
}
const Sanity = async () => {
    const services = await fetchServices();
    return (
        <div>
            <h1>Services - Data From Sanity</h1>
            {
                services.map((service) => {
                    return (
                        <div key={service.id}>
                            <h1>{service.title}</h1>
                            {service.description}
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sanity