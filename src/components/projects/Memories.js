import React from 'react'
import data from './data/Data'
import {Link} from 'react-router-dom'

const Memories = () => {
    const[blogs, setBlogs]=React.useState(data);
    const[read,setRead]=React.useState(false);
    return (
        <React.Fragment>
            <button onClick={()=>setBlogs([])} className="btn">Clear Blogs</button>
            <Link to="/"> <button className="btn">Return Home</button></Link>
            <hr/>
            <div className="container-fluid d-flex flex-wrap justify-content-rounded">
                
                {blogs.map(blog=>{
                    return(
                        <div className="card p-2 m-1" key={blog.id}>
                        <div className="card-header">
                            <h4>Blog<span>{blog.id}</span></h4>
                            <p>Creator:<span>{blog.name}</span></p>
                        </div>
                        <img src={blog.image} alt="blog image"/>
                        <div className="card-body">
                            <p>{blog.post}</p>
                        </div>
                    </div>
                    );
                

                })}
            </div>
                 
       
        </React.Fragment>
        
    )
}

export default Memories
