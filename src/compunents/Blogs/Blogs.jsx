import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from "prop-types";

const Blogs = ({handleAddtoBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h2 className="text-4xl">BLogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddtoBookmark={handleAddtoBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddtoBookmark: propTypes.func,
    handleMarkAsRead: propTypes.func
}
export default Blogs;