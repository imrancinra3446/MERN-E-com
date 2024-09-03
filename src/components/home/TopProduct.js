import React from 'react'
import products from '../../data/productData.json'
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom';

const TopProduct = () => {
    let topProducts = [];
    for (let i = 0; i < 3; i++) {
        const number = Math.floor(Math.random() * products.length)
        if (!topProducts.includes(products[number])) {
            topProducts.push(products[number]);
        } else {
            i--;
        }
    }
    const product = topProducts.map((item) => {
        return <Card key={item.id} className='col-lg-3 col-md-5 col-sm-8 m-2 m-sm-1'>
            <Link to= {`/product/${item.id}`} className=' text-decoration-none text-dark' >
                <CardBody>
                    <CardImg style={{ boxShadow: '1px 1px 10px grey', cursor: 'pointer' }} className='img-fluid top-product-img' src={item.image} alt={item.name} />
                    <CardTitle tag={'h4'} className='mt-3'> {item.name} </CardTitle>
                    <CardText> {item.price}/- </CardText>
                    <Button className=' btn-dark'>Buy</Button>
                    <Button className=' mx-2'>Details</Button>
                </CardBody>
            </Link>
        </Card>
    })
    return (
        <>
            <div className='row d-flex justify-content-around'>
                {product}
            </div>
        </>
    )
}

export default TopProduct
