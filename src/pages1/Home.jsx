import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductThunk } from '../Redux/productSlice';
import { nextPage,prevPage } from '../Redux/productSlice';

function Home() {


  const { products, error, loading, productsperPage, currentPage } = useSelector((state) => state.productReducer)

  const totalPages = Math.ceil(products?.length / productsperPage)
  const lastindex = currentPage * productsperPage
  const firstindex = lastindex - productsperPage
  const visibleProducts = products?.slice(firstindex, lastindex)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProductThunk())
    console.log(products);

  }, [])

  const handleNext=()=>{
    if(currentPage<totalPages){
      dispatch(nextPage())
    }
  }
  const handlePrev=()=>{
    if(currentPage>1){
      dispatch(prevPage())
    }
  }



  return (
    <>
      <div className='container px-4 px-lg-5 my-5' style={{ minHeight: '50vh' }}>
        <header className="bg-light py-2 w-100">
          <Carousel>
            <Carousel.Item className='text-center '>
              <img src="https://images.onlymyhealth.com/imported/images/2024/February/22_Feb_2024/1-olants.jpg" style={{ width: 'auto', maxHeight: '350px' }} className='w-100 px-5  image-fluid' alt="" />
            </Carousel.Item>
            <Carousel.Item className='text-center '>
              <img src="https://images.onlymyhealth.com/imported/images/2024/February/22_Feb_2024/Mainplant.jpg" style={{ width: 'auto', maxHeight: '350px' }} className='w-100 px-5  image-fluid' alt="" />
            </Carousel.Item>
            <Carousel.Item className='text-center '>
              <img src="https://images.onlymyhealth.com/imported/images/2024/February/22_Feb_2024/2plants.jpg" style={{ width: 'auto', maxHeight: '350px' }} className='w-100 px-5  image-fluid' alt="" />
            </Carousel.Item>
          </Carousel>
        </header>
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

              {
                loading ?
                  <h3>
                    <Spinner animation="border" role="status">
                    </Spinner><span >Loading...</span>

                  </h3>
                  :

                  (
                    error ?
                      <h3> {error}</h3>
                      :
                      <>
                        {visibleProducts?.map(
                          item => (
                            <div className="col mb-5">
                              <div className="card h-100">
                                <img className="card-img-top" src={item?.thumbnail} alt="..." />
                                <div className="card-body p-4">
                                  <div className="text-center">
                                    <h5 className="fw-bolder">{item?.title}</h5>
                                    $ {item?.price}
                                  </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                                  <div className="text-center">
                                    <Link to={`/view/${item?.id}`} className='btn btn-primary'>View More</Link>
                                  </div>
                                </div>
                              </div>
                            </div>

                          )
                        )}


                      </>





                  )

              }


            </div>
          </div>
        </section >
        <div className="mt-4 d-flex justify-content-center">
          <div>
            <button className='btn' onClick={handlePrev} >
              <i className="fa-solid fa-angles-left" />
            </button>
            {' '}
            {currentPage}/{totalPages}
            {' '}
            <button className='btn' onClick={handleNext}>
              <i className="fa-solid fa-angles-right" />
            </button>
          </div>
        </div>

      </div >





    </>
  )
}

export default Home