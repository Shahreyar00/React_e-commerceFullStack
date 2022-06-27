import React, { useEffect, useState } from 'react';
import "./product.scss";
import { useLocation, useParams } from 'react-router-dom';
import { Announcement, Navbar } from '../../components';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { publicRequest } from '../../requestMethod';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartRedux';

const Product = () => {
    const location = useLocation();
    // const id = location.pathname.split("/")[2];
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async() =>{
            try{
                const res = await publicRequest.get("/products/find/"+id);
                setProduct(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getProduct();
    },[id])

    const handleQuantity = (type) =>{
        if(type==="dec"){
            quantity>1 && setQuantity(quantity-1);
        }else{
            setQuantity(quantity+1);
        }
    };

    const handleClick = () => {
        dispatch(addProduct({...product, quantity, color, size}));
    }

    return (
        <div className="pd__container">
            <Navbar />
            <Announcement />
            <div className="wrapper">
                <div className="imgContainer">
                    {/* <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" alt="" /> */}
                    <img src={product.img} alt="product image" />
                </div>
                <div className="infoContainer">
                    <h1 className="title">{product.title}</h1>
                    <p className="desc">
                        {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum ab, deserunt eum consequatur asperiores fuga cum. Consectetur exercitationem minima temporibus et recusandae provident odio quaerat quod dolore nisi debitis, possimus neque fuga consequuntur delectus aperiam eveniet! Aut, rem ea. */}
                        {product.desc}
                    </p>
                    <span className="price">$ {product.price}</span>
                    <div className="filterContainer">
                        <div className="filter">
                            <span className="filterTitle">Colors : </span>
                            {product.color?.map((c)=>(
                                <div 
                                    className="filterColor" 
                                    style={{backgroundColor:c, border:"1px solid black"}} 
                                    key={c} 
                                    onClick={()=>setColor(c)}
                                ></div>
                            ))}
                            {/* <div
                                className="filterColor"
                                style={{backgroundColor:"black"}}
                            ></div>
                            <div
                                className="filterColor"
                                style={{backgroundColor:"blue"}}
                            ></div> */}
                        </div>
                        <div className="filter">
                            <span className="filterTitle">Selected color :</span>
                            <div className="filterColor" style={{backgroundColor:color}}></div>
                        </div>
                        <div className="filter">
                            <span className="filterTitle">Size : </span>
                            <select name="sizes" id="sizes" className="filterSize" onChange={(e)=>setSize(e.target.value)}>
                                {product.size?.map((s)=>(
                                    <option key={s}>{s}</option>
                                ))}
                                {/* <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option> */}
                            </select>
                        </div>
                    </div>
                    <div className="addContainer">
                        <div className="amountContainer">
                            <RemoveIcon onClick={()=>handleQuantity("dec")} style={{cursor:"pointer"}} />
                            <span className="amount">{quantity}</span>
                            <AddIcon onClick={()=>handleQuantity("inc")} style={{cursor:"pointer"}} />
                        </div>
                        <button className="btn" onClick={handleClick}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product