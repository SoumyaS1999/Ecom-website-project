import React from 'react';
import Products from '../../Products.json';
import { Container, Row, Col } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';  // Import the Bootstrap CSS
import './ProductList.css';

const ProductList = () => {
    const productlist = Products;
    console.log(productlist);

    return (
        <Container>
            <h1>Product-List:</h1>
            <Row className='rows'>
                {productlist.map((item) => (
                <Col key={item.title} sm={12} md={6} lg={6} xl={6}>
                    <div className="product-item">
                    <img src={item.imageUrl} alt={item.title} />
                    <br />
                    {item.title}
                    <br />
                    {item.price}
                    </div>
                   
                </Col>
    ))}
            </Row>

            
        </Container>
    );
}

export default ProductList;

