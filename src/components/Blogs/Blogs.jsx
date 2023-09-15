import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'
const Blogs = () => {
    const [blogs, setBlogs,] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    },[])
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {
            blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
        }
      </div>
    );
};
Blogs.propTypes = {
   blogs:PropTypes.func,
  
}
export default Blogs;