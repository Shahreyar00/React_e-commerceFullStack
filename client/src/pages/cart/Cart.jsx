import React from 'react';
import "./cart.scss";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Announcement, Navbar } from '../../components';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector((state)=>state.cart);

    console.log(cart);

    return (
        <div className="cart__container">
            <Navbar />
            <Announcement />
            <div className="cart__wrapper">
                <h1 className="title">YOUR BAG</h1>
                <div className="top">
                    <button className="top__btn1">CONTINUE SHOPPING</button>
                    <div className="topTexts">
                        <span className="topText">Shopping Bag({cart.products.length})</span>
                        <span className="topText">Your Wishlist(0)</span>
                    </div>
                    <div className="top__btn2">CHECKOUT NOW</div>
                </div>
                <div className="bottom">
                    <div className="info">
                        
                        {cart.products.map((product)=>(                
                            <div className="product">
                                <div className="productDetail">
                                    <img src={product.img} alt="cart prod image" />
                                    <div className="details">
                                        <span className="productName">
                                            <b>Product:</b> {product.title}
                                        </span>
                                        <span className="productId">
                                            <b>ID:</b> {product._id}
                                        </span>
                                        <div className="productColor" style={{backgroundColor:product.color}}></div>
                                        <span className="productSize">
                                            <b>Size:</b> {product.size}
                                        </span>
                                    </div>
                                </div>
                                <div className="priceDetail">
                                    <div className="productAmountContainer">
                                        <AddIcon />
                                        <div className="productAmount">{product.quantity}</div>
                                        <RemoveIcon />
                                    </div>
                                    <div className="productPrice">${product.price * product.quantity}</div>
                                </div>
                            </div>         
                        ))}
                        <hr />
                        {/* <div className="product">
                            <div className="productDetail">
                                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                                <div className="details">
                                    <span className="productName">
                                        <b>Product:</b> JESSIE THUNDER SHOES
                                    </span>
                                    <span className="productId">
                                        <b>ID:</b> 93813718293
                                    </span>
                                    <div className="productColor" style={{backgroundColor:"black"}}></div>
                                    <span className="productSize">
                                        <b>Size:</b> 9
                                    </span>
                                </div>
                            </div>
                            <div className="priceDetail">
                                <div className="productAmountContainer">
                                    <AddIcon />
                                    <div className="productAmount">1</div>
                                    <RemoveIcon />
                                </div>
                                <div className="productPrice">$50</div>
                            </div>
                        </div>
                        <hr /> */}
                    </div>

                    <div className="summary">
                        <h1 className="summaryTitle">ORDER SUMMARY</h1>
                        <div className="summaryItem">
                            <span className="summaryItemText">Subtotal</span>
                            <span className="summaryItemPrice">${cart.total}</span>
                        </div>
                        <div className="summaryItem">
                            <span className="summaryItemText">Estimated Shipping</span>
                            <span className="summaryItemPrice">$27.99</span>
                        </div>
                        <div className="summaryItem">
                            <span className="summaryItemText">Shipping Discount</span>
                            <span className="summaryItemPrice">-$27.99</span>
                        </div>
                        <div className="summaryItem total">
                            <span className="summaryItemText">Total</span>
                            <span className="summaryItemPrice">${cart.total}</span>
                        </div>
                        <div className="btnWrapper">
                            <button className="sum__btn">CHECKOUT NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart