import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

export default function Products() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;



    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const responce = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await responce.clone().json());
                setFilter(await responce.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false
            }

        }

        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                Loading ...
            </>
        )
    }
    const FilterProducts = (cat) =>{
        const updatedList = data.filter((x)=> x.category === cat);
        setFilter(updatedList);
    }

    console.log(data, "<---------")
    const ShowProducts = () => {
        return (
            <>
           
                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4'>
                                <div id='img' className="card h-100 text-center p-4" key={product.id} >
                                    <img  src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                                        <div id='buy' className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                            <p className="card-text lead fw-bold">${product.price}</p>
                                            <NavLink  to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                </div>

                            </div>
                        </>
                    )

                })}
            </>
        );
    };

   

    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 id='text' className='display-6 fw-bolder text-center'>Shop From the Best Products In The Market</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}
