import React from 'react';
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userRedux';

const Navbar = () => {
    const cartQuantity = useSelector((state)=>state.cart.quantity);
    const user = useSelector((state)=>state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = (e) =>{
        dispatch(logout());
        navigate("/login");
    }

    return (
        <div className="nav__container">
            <div className="nav__wrapper">
                <div className="nav__left">
                    <span className="language">EN</span>
                    <div className="nav__searchContainer">
                        <input type="text" placeholder="Search..." />
                        <SearchIcon className="nav__icon" />
                    </div>
                </div>
                <div className="nav__center">
                    <Link to="/">
                        <h1 className="logo">UShooP.</h1>
                    </Link>
                </div>
                <div className="nav__right">
                    {user?(
                        <>
                            <div className="menuItem userName">{user.username}</div>
                            <div 
                                className="menuItem"
                                onClick={handleLogout}
                            >LOGOUT</div>
                            <Link to="/cart">
                                <Badge badgeContent={cartQuantity} color="primary">
                                    <ShoppingCartOutlinedIcon className="navCart" />
                                </Badge>
                            </Link>
                        </>
                    ):(
                        <>
                            <Link to="/register"><div className="menuItem">REGISTER</div></Link>
                            <Link to="/login"><div className="menuItem">SIGN IN</div></Link>
                        </>
                    )}

                    
                </div>
            </div>
        </div>
    )
}

export default Navbar