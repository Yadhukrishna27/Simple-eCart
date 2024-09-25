import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='bg-light py-2 container-fluid'>
                <Row className='p-5'>
                    <Col sm={12} md={5}>
                        <h3>Ekart</h3>
                        <p style={{ textAlign: 'justify' }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ad modi ducimus quaerat enim officia, vel id odit, debitis ullam repudiandae magni dolore? Modi mollitia culpa, beatae exercitationem aliquid assumenda.
                        </p>

                    </Col>
                    <Col sm={12} md={2}>
                        <h3>Links</h3>
                        <div className='d-flex flex-column'>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/wish'}>Wishlist</Link>
                            <Link to={'/cart'}>Cart</Link>
                        </div>
                    </Col>
                    <Col sm={12} md={5}>
                        <h3>Feedback</h3>
                        <textarea name="" id="" className='form-control'></textarea>
                        <button className='btn btn-info mt-4'>Send</button>
                    </Col>
                </Row>
                <h6 className='text-center mt-2 mb-2'>Ecart 2024 &copy; All rights reserved</h6>
            </div>
        </>
    )
}

export default Footer