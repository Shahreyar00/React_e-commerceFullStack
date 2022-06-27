import React from 'react';
import "./footer.scss";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
    return (
        <div className="foot__container">
            <div className="left">
                <h1 className="logo">UShooP.</h1>
                <p className="desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus laudantium quam voluptate natus minus, vitae recusandae similique quasi molestias modi. Consequuntur placeat quas minima error, voluptatum et saepe est nulla tempore exercitationem vero quam suscipit atque dolor labore voluptas.
                </p>
                <div className="socialContainer">
                    <div className="socialIcon">
                        <FacebookOutlinedIcon style={{color:"#3B5999"}}/>
                    </div>
                    <div className="socialIcon">
                        <InstagramIcon style={{color:"#E4405F"}}/>
                    </div>
                    <div className="socialIcon">
                        <TwitterIcon style={{color:"#55ACEE"}}/>
                    </div>
                    <div className="socialIcon">
                        <PinterestIcon style={{color:"#E60023"}}/>
                    </div>
                </div>
            </div>
            <div className="center">
                <h3 className="sub-title">Useful Links</h3>
                <ul className="list">
                    <li className="listItem">Home</li>
                    <li className="listItem">Cart</li>
                    <li className="listItem">Men Fashion</li>
                    <li className="listItem">Woman Fashion</li>
                    <li className="listItem">Accessories</li>
                    <li className="listItem">My Account</li>
                    <li className="listItem">Order Tracking</li>
                    <li className="listItem">Terms</li>
                </ul>
            </div>
            <div className="right">
                <h3 className="sub-title">Contact</h3>
                <div className="contactItem">
                    <RoomIcon style={{marginRight:"10px"}} />
                    <span className="right__text">21/E Main Road, Ranchi</span>
                </div>
                <div className="contactItem">
                    <PhoneIcon style={{marginRight:"10px"}} />
                    <span className="right__text">+91 12341 00123</span>
                </div>
                <div className="contactItem">
                    <MailOutlineIcon style={{marginRight:"10px"}} />
                    <span className="right__text">ushoop@gmail.com</span>
                </div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment" />
            </div>
        </div>
    )
}

export default Footer