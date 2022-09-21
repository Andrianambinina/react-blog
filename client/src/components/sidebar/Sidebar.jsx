import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import login from "../../pages/login/Login";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get("/categories");
            setCategories(response.data);
        };
        fetchCategories();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://images.pexels.com/photos/7014438/pexels-photo-7014438.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium enim expedita fugiat ipsa modi nostrum saepe.
                    Autem fugit molestiae optio quaerat quam quis totam?
                    Adipisci consequuntur.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {categories.map((category) => (
                        <Link
                            to={`/?cat=${category.name}`}
                            key={category._id}
                            className="link"
                        >
                            <li className="sidebarListItem">{category.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
