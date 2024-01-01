"use client"
import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true)

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        let items = await response.json();
        // console.log(items)
        setProducts(items);
        setLoader(false);
    }
    useEffect(() => {
        fetchProducts();
    }, [products])

    return (

        <>
            {products.length ?

                <table>
                    <tr>
                        <th>image</th>
                        <th>id</th>
                        <th>title</th>
                        <th>price</th>
                        <th>category</th>
                        <th>description</th>

                    </tr>
                    {products.map((item) => (
                        <tr key={item.id}>
                            <td><img src={item.image} alt={`${item.title}'s image`} width={90} /></td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))
                    }
                </table> : loader ? <h1 className='font-bold text-4 1xl flex justify-center'>Loading...</h1> : <h1>Products Not Found!</h1>}
            {/* <button onClick={fetchProducts}>Get Products</button> */}
        </>
    )
}

export default Products