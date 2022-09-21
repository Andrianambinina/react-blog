import "./topbar.css";
import { Context } from "../../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Logout } from "../../context/Actions";

const TopBar = () => {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch(Logout());
    };

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
                        <Link to="/" className="link">
                            Home
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link">
                            About
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/" className="link">
                            Contact
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write" className="link">
                            Write
                        </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img
                        className="topImg"
                        src={user.profilePicture}
                        alt=""
                    />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link to="/login" className="link">
                                Login
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link to="/register" className="link">
                                Register
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
};

export default TopBar;
