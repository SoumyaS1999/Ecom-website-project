import React ,{useContext}from 'react';
import Products from '../../Products.json';
import { Container, Row, Col,Button} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';  // Import the Bootstrap CSS
import './ProductList.css';
import CartContext from '../Store/cart-context';

const ProductList = () => {
    const cartctx=useContext(CartContext);
    const productlist = Products;
    console.log(productlist);

const addToCart = (item) => {
    let Item = {
    title: item.title,
    price: item.price,
    quantity: "1",
    };
    cartctx.addCartItem(Item);
    };

    return (
        <Container>
            <h1>Product-List:</h1>
            <Row className='rows'>
                {productlist.map((item) => (
                <Col key={item.title} sm={12} md={6} lg={6} xl={6}>
                    <div className="product-item">
                    <h3>{item.title}</h3>
                    <br />
                    <img src={item.imageUrl} alt={item.title} />
                    <br />
                    <div className='itemdetails'>
                    <h3>${item.price}</h3>
                    <Button className='addtocart' onClick={()=>addToCart(item)}>Add to Cart</Button>
                    </div>
                    
                    </div>
                   
                </Col>
    ))}
            </Row>

            
        </Container>
    );
}

export default ProductList;

