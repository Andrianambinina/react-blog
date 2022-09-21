import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const response = await axios.post("/auth/login", {
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
        } catch (e) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="Enter your username..."
                    ref={usernameRef}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="Enter your password..."
                    ref={passwordRef}
                />
                <button
                    className="loginButton"
                    type="submit"
                    disabled={isFetching}
                >
                    Login
                </button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">
                    Register
                </Link>
            </button>
        </div>
    );
};

export default Login;
