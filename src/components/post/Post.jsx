import "./post.css";

const Post = () => {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/4224268/pexels-photo-4224268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDescription">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias architecto aspernatur, at consequatur, earum fugiat hic odio odit officia quasi quod sint, sunt
                tempora veritatis vero voluptas voluptate. Veniam, voluptatibus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias architecto aspernatur, at consequatur, earum fugiat hic odio odit officia quasi quod sint, sunt
                tempora veritatis vero voluptas voluptate. Veniam, voluptatibus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias architecto aspernatur, at consequatur, earum fugiat hic odio odit officia quasi quod sint, sunt
                tempora veritatis vero voluptas voluptate. Veniam, voluptatibus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias architecto aspernatur, at consequatur, earum fugiat hic odio odit officia quasi quod sint, sunt
                tempora veritatis vero voluptas voluptate. Veniam, voluptatibus!
            </p>
        </div>
    );
};

export default Post;