import { client } from '../../../config/contentful'
import React from 'react'

const fetchProducts = async () => {
    let response = await client.getEntries({ content_type: "products" });

    const productsData = response.items.map((item) => ({
        title: item.fields.title,
        description: item.fields.description,
        stock: item.fields.stock,
        url: item.fields.url.fields.file.url
    }));

    return productsData;
};


const ContentFul = async () => {
    const products = await fetchProducts()

    // console.log(products)

    return (
        <div>
            <h1 className='font-extrabold text-4xl m-8'>Our Products</h1>

            {products?.map((item, index) => {
                console.log(item); // Log the item object for debugging
                return (
                    <div key={index}>
                        {/* Render valid JSX elements based on the item object */}
                        <h1>{item.title}</h1>
                        <p>{item.stock}</p>
                        <p>{item.description}</p>
                        <img src={item.url} alt={`${item.title}'s image`} width={300} className='m-8' />
                    </div>
                );
            })}


        </div>
    )
}

export default ContentFul