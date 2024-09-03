import React from 'react';
import Navigation from '../home/Navigation';
import { useParams } from 'react-router-dom';
import data from '../../data/productData.json'

const Product = () => {
  const { id } = useParams();
  document.title = "E-Com MERN | Products"
  const product = data.find(pd => pd.id === id) //(pd.id) means data theke asha id gula 
  console.log(product.image)

  return (
    <div>
      <Navigation />
      <div>
        <div className="container mt-3">
          <h3 className=' text-center my-3'>Product Details</h3>
          <div className="row bg-light p-5" style={{ borderRadius: '10px' }}>
            <div className="col-lg-4 border-end text-center">
              <img src={product.image} width={'250'} className=' img-fluid rounded-3' alt={product.name} />
              <div className="d-flex justify-content-evenly align-items-center mt-2">
                <div className="btn btn-light btn-outline-dark">Add to Cart</div>
                <div className="btn btn-dark">Buy Now</div>
              </div>
            </div>
            <div className="col-lg-8 border-start">
              <h3>{product.name}</h3>
              <hr />
              <p style={{ textAlign: 'justify' }}>{product.description}</p>
              <hr />
              <h4>{product.price}/-</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;
