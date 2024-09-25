import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { increaseQuantity, removeFromCart ,decreaseQuantity ,checkout } from '../Redux/cartSlice'
import { useDispatch } from 'react-redux'

function Cart() {

  const { cart } = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()
  return (
    <>
    <div className="container-fluid p-4">
    <h3>Cart Summary</h3>
    <Row>
      <Col sm={12} md={8}>
          {
            cart.length > 0 ? 
            <table className="table table-bordered border shadow border-4 border-dark">
              <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Image</th>
              <th>Unit Price</th>
              <th>Quatity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              cart?.map(item=>(
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <img src={item.thumbnail} width={'250px'} alt="" />
    
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <button className='btn ' onClick={() =>(dispatch(increaseQuantity(item.id)))}>+</button>
                    <input type="text" className='form-control w-25' value={item.quantity} />
                    <button className='btn ' onClick={() =>(dispatch(decreaseQuantity(item.id)))}>-</button>
                  </td>
                  <td>
                    <button className='btn btn-danger' onClick={()=>{dispatch(removeFromCart(item.id))}} >
                      Remove</button>
                  </td>
    
    
                </tr>
                ))}
    

            
            
          </tbody>
          
          </table>
          :
          <h3 className="text-center text-warning">No Items Added</h3>

          }
                
      </Col>
      <Col>
        <div className="border shadow p-3 border-3">
          <h4>Total items: {cart?.length}</h4>
          <h4>Total Amount: {cart?.reduce((prev,item)=> prev+(item.price*item.quantity),0)}</h4>
          <div className="mt-2 d-grid">
            <button className='btn btn-primary' onClick={()=>dispatch(checkout())}>Checkout</button>
            
          </div>
          <Link className="btn btn-outline-info mt-5" to={'/'}> Shop More</Link>
        </div>
      </Col>

    </Row>

    </div>
    </>
  )
}

export default Cart