import React from 'react'
import myImage from './myImage.JPG';
import {Link} from 'react-router-dom'

const Showcase = () => {
    return (
        <React.Fragment>
            <div className="  showcase  p-3">
           
                <div className="container card shadow-lg">
                    <div className="card-header">
                        <h4 className="text-dark bg-danger p-2 shadow-lg">My Profile</h4>
                    </div>
                    <img src={myImage} className="card-img-top" alt="dp image" style={{width:"200px", height:"200px", marginLeft:"1rem", marginTop:"1rem"}} />
                    <div className="card-body ">
                        
                                <h5 className="card-title">Soumita Majumder</h5>
                            <p className="card-text bg-warning p-3">Javascript and React.js Web Devloper,Coding Tutor, Frelancer</p>
                            <br/>
                                
                    </div>
                                
                </div>
                
             </div>
                        <br/><hr/>
                        <h4 className="text-white p-2 bg-danger">My projects on React.js</h4><br/>
                        <div className="project-showcase">
                                    
                            <Link to="/project1"><button className="btn">Number Facts</button></Link>
                                   
                            <Link to="/project2"><button className="btn">Blogs Showcase</button></Link>
                                     
                            <Link to="/project3"><button className="btn">Events Showcase</button></Link>
                          </div>
      
        </React.Fragment>
        
    );
}

export default Showcase
