import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishList } from '../Redux/wishSlice'
import { addToCart } from '../Redux/cartSlice'


function View() {

    const [data, setData] = useState({})
    const dispatch=useDispatch()


    const { id } = useParams()
    console.log(id)


    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products')).products
        const pro = products.find((item) => item.id == id)
        setData(pro)

    }, [])

    const handleWish = () => {
        dispatch(addToWishList(data))
    }



    console.log(data);


    return (
        <>
            <section className="py-5">

                {
                    data &&
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="row gx-4 gx-lg-5 align-items-center">
                            <div className="col-md-6">
                                <img className="card-img-top mb-5 mb-md-0" src={data?.thumbnail} alt="..." /></div>
                            <div className="col-md-6">
                                <div className="small mb-1">ID:{data?.id}</div>
                                <h1 className="display-5 fw-bolder">{data?.title}</h1>
                                <div className="fs-5 mb-5">
                                    <span >${data?.price}</span>

                                </div>
                                <p className="lead">{data?.description}</p>
                                <div className="d-flex justify-content-between">
                                <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={()=>{dispatch(addToCart(data))}} >
                                        <i className="fa-solid fa-cart-plus me-2" style={{color:"#63E6BE",}}></i>
                                        Add to cart
                                    </button>
                                    <button className="btn btn-dark" onClick={handleWish}>
                                    <i className="fa-solid fa-heart-circle-plus me-2" style={{color:"#e41126",}}></i>
                                        Add to WishList
                                    </button>

                                    
                                </div>
                            </div>
                        </div>
                    </div>

                }

            </section>
        </>
    )
}

export default View