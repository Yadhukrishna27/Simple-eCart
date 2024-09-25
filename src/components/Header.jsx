import React, { useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { searchWithKey } from '../Redux/productSlice';

function Header() {

    const { items } = useSelector((state) => state.wishReducer)
    const { cart } = useSelector((state) => state.cartReducer)

    const [Key,setKey]=useState(" ")

    const dispatch=useDispatch()


    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                            <i className="fa-solid fa-cart-shopping" style={{ color: "#B197FC", }} />{' '}
                            Ekart
                        </Link>
                    </Navbar.Brand>
                    <div className='d-flex'>
                        <div className='d-flex'>
                            <input type="text" onChange={(e)=>setKey(e.target.value)} placeholder='Enter Keyword to search' className='form-control me-1' />
                            <button className='btn btn-info me-4' onClick={()=>dispatch(searchWithKey(Key))}>Search</button>
                        </div>

                        <Link className='btn border border-1 border-dark me-4' to={'/wish'}>
                            <i className="fa-solid fa-heart" style={{ color: "#FF8C00", }} />
                            Wishlist
                            {'   '}
                            <span className='badge bg-dark'>
                                {items?.length}
                            </span>
                        </Link>
                        <Link className='btn border border-1 border-dark me-4' to={'/cart'}>
                            <i className="fa-solid fa-cart-shopping" style={{ color: "#c71f1f", }} />
                            Cart
                            {'   '}
                            <span className='badge bg-dark'>
                                {cart?.length}
                            </span>
                        </Link>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header