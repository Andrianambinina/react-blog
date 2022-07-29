import "./singlePost.css";

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://images.pexels.com/photos/5863606/pexels-photo-5863606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Safak</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloribus impedit rerum. A
                    architecto atque cumque deserunt dolore, ducimus, eaque eos ipsa laboriosam laborum ratione
                    similique tempore voluptas voluptate voluptatem.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloribus impedit rerum. A
                    architecto atque cumque deserunt dolore, ducimus, eaque eos ipsa laboriosam laborum ratione
                    similique tempore voluptas voluptate voluptatem.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloribus impedit rerum. A
                    architecto atque cumque deserunt dolore, ducimus, eaque eos ipsa laboriosam laborum ratione
                    similique tempore voluptas voluptate voluptatem.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloribus impedit rerum. A
                    architecto atque cumque deserunt dolore, ducimus, eaque eos ipsa laboriosam laborum ratione
                    similique tempore voluptas voluptate voluptatem.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloribus impedit rerum. A
                    architecto atque cumque deserunt dolore, ducimus, eaque eos ipsa laboriosam laborum ratione
                    similique tempore voluptas voluptate voluptatem.
                </p>
            </div>
        </div>
    );
};

export default SinglePost;