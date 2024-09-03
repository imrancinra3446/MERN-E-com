import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'
import data from '../../data/productData.json'
import Navigation from '../home/Navigation'

const Products = () => {
    const products = data.map((item) => {
        return (
            <Card key={item.id} className='col-lg-3 col-md-5 col-sm-8 m-sm-1 mx-3'>
                <Link to={`/product/${item.id}`} className=' text-decoration-none text-dark' >
                    <CardBody>
                        <CardImg style={{ boxShadow: '1px 1px 10px grey', cursor: 'pointer' }} className='img-fluid top-product-img' src={item.image} alt={item.name} />
                        <CardTitle tag={'h4'} className='mt-3'> {item.name} </CardTitle>
                        <CardText> {item.price}/- </CardText>
                        <Button className=' btn-dark'>Buy</Button>
                        <Button className=' mx-2'>Details</Button>
                    </CardBody>
                </Link>
            </Card>
        )
    })
    return <div>
        <Navigation />
        <div className="container">
            <h2 className='text-center my-3'>Products</h2>
            <div className="row justify-content-center align-item-center">
                {products}
            </div>
        </div>
    </div>
}

export default Products;
