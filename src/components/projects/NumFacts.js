import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

 class NumFacts extends Component {

    state={
        number:undefined,
        facts:''
    };

    // componentDidMount(){
    //    this.change();
    // }
change=async(e)=>{
   
   
    e.preventDefault();
    const findTerm=e.target.elements.search.value;
    const res=await axios.get(`http://numbersapi.com/${findTerm}`);
   
    this.setState({facts:res.data});
        
}


    render() {
        
        return (
            <div className="card">
                <div className="card-header">
                    <h2 className="text-warning">Interesting Facts On Numbers</h2>
                    <form onSubmit={this.change}>
                        <div className="form-group">
                            <input type="text" autoComplete="off" name="search" placeholder="Put a Number"
                            className="form-control mb-2"/>
                        </div>
                        <button className="submit-btn"type="submit">Search</button>
                    </form>
                </div>
                <div className="card-body d-flex">
                    <h4>Facts</h4>
                    <p className="text-warning">{this.state.facts}</p>
                </div>
                <Link to="/"> <button className="err-btn">Return Home</button></Link>
            </div>
        )
           
    }
}
export default NumFacts