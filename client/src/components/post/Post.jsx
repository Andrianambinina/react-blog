import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const public_folder = "http://localhost:5000/images/";

    return (
        <div className="post">
            {post.photo && <img className="postImg" src={public_folder + post.photo} alt="" />}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((category) => (
                        <span className="postCat">{category.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`}>
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toLocaleDateString()}
                </span>
            </div>
            <p className="postDescription">{post.description}</p>
        </div>
    );
};

export default Post;
