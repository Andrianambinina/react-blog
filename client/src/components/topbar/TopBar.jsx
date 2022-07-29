import "./topbar.css";
import {Link} from "react-router-dom";

const TopBar = () => {
    const user = false;

    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-pinterest-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link" >Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link" >About</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link" >Contact</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write" className="link" >Write</Link>
                    </li>
                    <li className="topListItem">
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                            className="topImg"
                            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link to="/login" className="link" >Login</Link>
                            </li>
                            <li className="topListItem">
                                <Link to="/register" className="link" >Register</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
};

export default TopBar;