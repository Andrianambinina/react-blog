import "./singlePost.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const public_folder = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get(`/posts/${path}`);
            setPost(response.data);
            setTitle(response.data.title);
            setDescription(response.data.description);
        };
        getPost();
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (error) {}
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: "coco",
                title,
                description,
            });
            setUpdateMode(false);
        } catch (error) {}
    };

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img
                        className="singlePostImg"
                        src={public_folder + post.photo}
                        alt=""
                    />
                )}
                {(updateMode && (
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="singlePostTitleInput"
                        autoFocus
                    />
                )) || (
                    <h1 className="singlePostTitle">
                        {title}
                        {post.username === user.username && (
                            <div className="singlePostEdit">
                                <i
                                    className="singlePostIcon fa-solid fa-pen-to-square"
                                    onClick={() => setUpdateMode(true)}
                                ></i>
                                <i
                                    className="singlePostIcon fa-solid fa-trash-can"
                                    onClick={handleDelete}
                                ></i>
                            </div>
                        )}
                    </h1>
                )}
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author:{" "}
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">
                        {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                </div>
                {(updateMode && (
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="singlePostDescInput"
                        cols="30"
                        rows="5"
                    ></textarea>
                )) || <p className="singlePostDesc">{description}</p>}
                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate}>
                        Update
                    </button>
                )}
            </div>
        </div>
    );
};

export default SinglePost;
